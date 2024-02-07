// Backend:
import { QueryValidator } from "../lib/validators/query-validator";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { getPayloadClient } from "../get-payload";
export const appRouter = router({
    getAllWebsites: publicProcedure
        .input(
            z.object({
                limit: z.number().min(1).max(100),
                cursor: z.number().nullish(),
                query: QueryValidator,
            })
        )
        .query(async ({ input }) => {
            const { query, cursor } = input;
            const { sort, limit, ...queryOpts } = query;
            const payload = await getPayloadClient();
            const parsedQueryOpts: Record<string, { equals: string }> = {};
            Object.entries(queryOpts).forEach(([key, value]) => {
                parsedQueryOpts[key] = { equals: value as string };
            });
            const page = cursor || 1;
            const {
                docs: items,
                hasNextPage,
                nextPage,
            } = await payload.find({
                collection: "sites",
                where: {
                    featured: {
                        equals: true,
                    },
                    ...parsedQueryOpts,
                },
                sort,
                depth: 1,
                limit,
                page,
            });
            return {
                items,
                nextPage: hasNextPage ? nextPage : null,
            };
        }),
});

export type AppRouter = typeof appRouter;
