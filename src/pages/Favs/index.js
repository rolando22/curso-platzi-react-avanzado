import React from "react";
import { GetFavorites } from "../../containers/GetFavorites";
import { Layout } from "../../components";

export function Favs () {
    return(
        <Layout
            title="Tus Favoritos"
            subtitle="Aquí puedes encontrar tus favoritos"
        >
            <GetFavorites />
        </Layout>
    );
};