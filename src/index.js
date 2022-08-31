import React from "react";
import { createRoot } from "react-dom/client";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
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
    cache: new InMemoryCache(),
    onError: onError(({ networkError }) => {
        if (networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('token');
            window.location.href = '/user';
        }
    }),
});

createRoot(document.getElementById('app'))
    .render(
        <ApolloProvider client={client}>
            <AppProvider>
                <App />
            </AppProvider>
        </ApolloProvider>
    );