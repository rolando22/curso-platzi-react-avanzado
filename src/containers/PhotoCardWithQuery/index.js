import React from "react";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import { PhotoCard } from "../../components";

export function PhotoCardWithQuery ({ id }) {
    const { loading, data } = useGetPhoto(id);

    return (
        (!loading) && 
            (<PhotoCard {...data?.photo}/>)
    );
};