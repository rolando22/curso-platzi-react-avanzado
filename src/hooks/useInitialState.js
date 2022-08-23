import React, { useState } from "react";

export function useInitialState () {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        setIsAuth(true);
    };

    return { isAuth, login };
};