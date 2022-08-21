import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { App } from "./App";

const client = new ApolloClient({
    uri: 'https://petgram-api-2022.vercel.app/graphql',
    cache: new InMemoryCache()
});

createRoot(document.getElementById('app'))
    .render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );