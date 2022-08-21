import React, { useState } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";
import { Articule, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
    const { element, show } = useLazyLoad();
    const [liked, setLiked] = useState(() => {
        try {
            return window.localStorage.getItem(`like-${id}`);
        } catch {
            return false
        };
    });
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    const setLocalStorage = (like) => () => {
        try {
            window.localStorage.setItem(`like-${id}`, like);
            setLiked(like);
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <Articule ref={element}>
            { show &&
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img
                                src={src}
                                alt="cat"
                            />
                        </ImgWrapper>
                     </a>
                    <Button onClick={setLocalStorage(!liked)}>
                        <Icon size='32px'/>
                        {likes} likes!
                    </Button>
                </>
            }
        </Articule>
    );
};