import { useState } from "react";
// import { useApolloClient } from "@apollo/client";

export function useInitialState () {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token');
    });
    // const client = useApolloClient();

    const activateAuth = (token) => {
        setIsAuth(true);
        window.sessionStorage.setItem('token', token);
    };

    const removeAuth = () => {
        setIsAuth(false);
        window.sessionStorage.removeItem('token');
        // client.resetStore();
    };

    return { isAuth, activateAuth, removeAuth };
};