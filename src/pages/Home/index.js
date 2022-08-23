import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories, ListOfPhotoCards } from "../../components/";

export function Home () {
    let params = useParams();

    return (
        <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id}/>
        </>
    );
};