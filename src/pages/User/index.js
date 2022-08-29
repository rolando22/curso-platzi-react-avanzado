import React from "react";
import { SubmitButton } from "../../components/"; 
import { useAppContext } from "../../hooks";

export function User () {
    const { removeAuth } = useAppContext();

    return (
        <>
            <h1>User</h1>
            <SubmitButton
                onClick={removeAuth}
            >
                Cerrar Sesión
            </SubmitButton>
        </>
    );
};