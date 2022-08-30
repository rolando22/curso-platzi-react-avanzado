import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";

export function Detail () {
    let params = useParams();

    return (
        <Layout
            title={`Fotografía ${params.detailId}`}
            subtitle={`Detalle de la fotografía ${params.detailId}`}
        >
            <PhotoCardWithQuery detailId={params.detailId} />
        </Layout>
    );
};