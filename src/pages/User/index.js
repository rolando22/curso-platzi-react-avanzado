import React from "react";
import { Layout, SubmitButton } from "../../components/"; 
import { useAppContext } from "../../hooks";

export function User () {
    const { removeAuth } = useAppContext();

    return (
        <Layout
            title="Panel de Usuario"
            subtitle="Acá puedes gestionar tu cuenta de Petgram"
        >
            <SubmitButton
                onClick={removeAuth}
            >
                Cerrar Sesión
            </SubmitButton>
        </Layout>
    );
};