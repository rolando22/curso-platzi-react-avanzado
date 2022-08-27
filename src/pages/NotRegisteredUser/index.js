import React from "react";
import { UserForm } from "../../components";
import { useAppContext, useRegisterMutation } from "../../hooks";

export function NotRegisteredUser () {
    const { login } = useAppContext();
    const { register, loading, error } = useRegisterMutation();
    const errorMsg = error ? 'El usuario ya existe.' : null;

    const onRegister = ({ email, password }) => {
        const input = { email, password };
        register({ variables: { input } })
            .then(login)
            .catch(() => {});
    };

    return (
        <>
            <UserForm
                title='Registrarse'
                loading={loading}
                error={errorMsg}
                onSubmit={onRegister}
            />
            <UserForm
                title='Iniciar Sesión'
                onSubmit={login}
            />
        </>
    );
};