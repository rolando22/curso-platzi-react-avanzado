import React from "react";
import { useQuery, gql } from "@apollo/client";
import { PhotoCard } from "../";

const LIST_OF_PHOTO_CARDS = gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

const LIST_OF_PHOTO_CARDS_BY_CATEGORY = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export function ListOfPhotoCards ({ categoryId }) {
    const { loading, error, data } = useQuery(
        LIST_OF_PHOTO_CARDS_BY_CATEGORY,
        { variables: { categoryId } }
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <ul>
            {data.photos.map(photo =>
                <PhotoCard
                    key={`photo-${photo.id}`}
                    id={photo.id}
                    likes={photo.likes}
                    src={photo.src}
                />
            )}
        </ul>
    );
};