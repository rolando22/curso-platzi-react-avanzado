import React from "react";
import { UserForm } from "../../components";
import { useAppContext, useRegisterMutation } from "../../hooks";

export function NotRegisteredUser () {
    const { login } = useAppContext();
    const { register } = useRegisterMutation();

    const onRegister = ({ email, password }) => {
        const input = { email, password };
        register({ variables: { input } })
            .then(login());
    };

    return (
        <>
            <UserForm title='Registrarse' onSubmit={onRegister} />
            <UserForm title='Iniciar Sesión' onSubmit={login} />
        </>
    );
};