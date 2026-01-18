/*
"use client";

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";

function makeClient() {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/graphql",
        fetchOptions: { cache: "no-store" },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    });
}

const client = makeClient();

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
*/

"use client";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from "@apollo/client";

function createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_API_URL!,
            headers: {
                authorization:
                    typeof window !== "undefined"
                        ? `Bearer ${localStorage.getItem("token")}`
                        : "",
            },
            fetchOptions: { cache: "no-store" },
        }),
        cache: new InMemoryCache(),
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    const client = createApolloClient();

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
