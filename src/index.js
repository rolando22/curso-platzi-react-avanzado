import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { App } from "./App";
import { AppProvider } from "./contexts/AppContext";

const client = new ApolloClient({
    uri: 'https://petgram-api-2022.vercel.app/graphql',
    cache: new InMemoryCache()
});

createRoot(document.getElementById('app'))
    .render(
        <AppProvider>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </AppProvider>
    );