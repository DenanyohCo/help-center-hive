"use client";
import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from 'axios';

const Providers = ({ children }: PropsWithChildren<{}>) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: async ({ queryKey }) => {
                    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/${queryKey[0]}`);
                    return data;
                }
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default Providers;