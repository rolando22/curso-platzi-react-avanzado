import React from "react";
import { useAppContext } from "../../hooks";

export function NotRegisteredUser () {
    const { login } = useAppContext();

    return (
        <form onSubmit={login}>
            <button>Iniciar sesión</button>
        </form>
    );
};