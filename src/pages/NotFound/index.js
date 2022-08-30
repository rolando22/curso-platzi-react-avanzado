import React from "react";
import { Layout } from "../../components";
import { Title } from "./styles";

export function NotFound () {
    return (
        <Layout
            title="Página no encontrada"
            subtitle="Esta página no existe"
            show={false}
        >
            <Title>Error 404: página no encontrada.</Title>
        </Layout>
    );
};