import React from "react";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import { PhotoCard } from "../../components";

export function PhotoCardWithQuery ({ id }) {
    const { loading, error, data } = useGetPhoto(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <PhotoCard {...data?.photo}/>
    );
};