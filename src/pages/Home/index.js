import React from "react";
import { useParams } from "react-router-dom";
import { Layout, ListOfCategories, ListOfPhotoCards } from "../../components/";

export function Home () {
    let params = useParams();

    return (
        <Layout
            title="Tu app de fotos de mascotas"
            subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
            show={false}
        >
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id}/>
        </Layout>
    );
};