import React from "react";
import { useGetFavorites } from "../../hooks/";
import { ListOfFavs } from "../../components/";

export function GetFavorites () {
    const { loading, error, data: { favs = [] } = {} } = useGetFavorites();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <ListOfFavs favs={favs} />
    );
};