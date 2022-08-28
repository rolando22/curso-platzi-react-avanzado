import React from "react";
import { createRoot } from "react-dom/client";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { App } from "./App";
import { AppProvider } from "./contexts/AppContext";

const httplink = createHttpLink({
    uri:'https://petgram-api-2022.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = window.sessionStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization : token ? `Bearer ${token}` : '',
        },
    }
});

const client = new ApolloClient({
    link: authLink.concat(httplink),
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