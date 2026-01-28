import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpLink } from "@trpc/client";
import { trpc } from "./lib/trpc";
import superjson from "superjson";
import CommunityHome from "./CommunityHome";

export function CommunityProvider() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpLink({
                    url: "/api/trpc",
                    transformer: superjson,
                }),
            ],
        })
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <CommunityHome />
            </QueryClientProvider>
        </trpc.Provider>
    );
}
