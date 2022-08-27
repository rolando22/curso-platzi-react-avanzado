import React from "react";
import { UserForm } from "../../components";
import { useAppContext, useRegisterMutation, useLoginMutation } from "../../hooks";

export function NotRegisteredUser () {
    const { login } = useAppContext();
    const { register, loading: loadingRegister, error: errorRegister } = useRegisterMutation();
    const { login: loginMutation, loading: loadingLogin, error: errorLogin } = useLoginMutation();
    const errorMsgRegister = errorRegister ? 'El usuario ya existe.' : null;
    const errorMsgLogin = errorLogin ? 'La contraseña es incorrecta' : null;

    const onRegister = ({ email, password }) => {
        const input = { email, password };
        register({ variables: { input } })
            .then(login)
            .catch(() => {});
    };

    const onLogin = ({ email, password }) => {
        const input = { email, password };
        loginMutation({ variables: { input } })
            .then(login)
            .catch(() => {});
    };

    return (
        <>
            <UserForm
                title='Registrarse'
                loading={loadingRegister}
                error={errorMsgRegister}
                onSubmit={onRegister}
            />
            <UserForm
                title='Iniciar Sesión'
                loading={loadingLogin}
                error={errorMsgLogin}
                onSubmit={onLogin}
            />
        </>
    );
};