import React from "react";
import { Link } from "react-router-dom";
import { FavButton } from "../";
import { useLazyLoad, useToggleLikeMutation } from "../../hooks/";
import { Articule, ImgWrapper, Img } from "./styles";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export function PhotoCard ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) {
    const { element, show } = useLazyLoad();
    const { toggleLike } = useToggleLikeMutation();

    const handleFavClick = () => {
        toggleLike({ variables: { input: { id } } });
    };
    
    return (
        <Articule ref={element}>
            { show &&
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img
                                src={src}
                                alt={id}
                            />
                        </ImgWrapper>
                     </Link>
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