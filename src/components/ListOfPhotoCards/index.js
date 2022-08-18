import React from "react";
import { PhotoCard } from "../";

export function ListOfPhotoCards () {
    return (
        <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(card =>
                <PhotoCard key={card}/>
            )}
        </ul>
    );
};