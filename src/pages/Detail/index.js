import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";

export function Detail () {
    let params = useParams();

    return (
        <PhotoCardWithQuery detailId={params.detailId} />
    );
};