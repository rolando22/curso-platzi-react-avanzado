import React from "react";
import { useGetPhoto } from "../../hooks/";
import { PhotoCard } from "../../components";

export function PhotoCardWithQuery ({ detailId }) {
    const { loading, error, data } = useGetPhoto(detailId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <PhotoCard {...data?.photo}/>
    );
};