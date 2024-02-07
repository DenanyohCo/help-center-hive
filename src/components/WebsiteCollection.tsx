"use client";

import { TQueryValidator } from "@/lib/validators/query-validator";
import { trpc } from "@/trpc/client";

interface WebsiteCollectionProps {
    title: string;
    subtitle: string;
    href?: string;
    query: TQueryValidator;
}
const WebsiteCollection = (props: WebsiteCollectionProps) => {
    const { title, subtitle, href, query } = props;
    const { data } = trpc.getAllWebsites.useInfiniteQuery(
        {
            limit: query.limit || 12,
            query,
        },
        {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        }
    );
    console.log(data);
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};
export default WebsiteCollection;
