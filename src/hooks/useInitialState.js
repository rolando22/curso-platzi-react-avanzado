import { useState } from "react";

export function useInitialState () {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token');
    });

    const activateAuth = (token) => {
        setIsAuth(true);
        window.sessionStorage.setItem('token', token);
    };

    return { isAuth, activateAuth };
};