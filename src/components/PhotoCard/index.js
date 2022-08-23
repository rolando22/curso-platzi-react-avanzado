import React from "react";
import { useMutation, gql } from "@apollo/client";
import { FavButton } from "../";
import { useLazyLoad } from "../../hooks/useLazyLoad";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Articule, ImgWrapper, Img } from "./styles";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id,
        liked,
        likes
      }
    }
`;

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
    const { element, show } = useLazyLoad();
    const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
    const [mutation] = useMutation(LIKE_PHOTO);

    const handleFavClick = () => {
        if (!liked) { mutation({ variables: { input: { id } } }); }
        setLiked(!liked);
    };
    
    return (
        <Articule ref={element}>
            { show &&
                <>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img
                                src={src}
                                alt="cat"
                            />
                        </ImgWrapper>
                     </a>
                    <FavButton
                        liked={liked}
                        likes={likes}
                        onClick={handleFavClick}
                    />
                </>
            }
        </Articule>
    );
};