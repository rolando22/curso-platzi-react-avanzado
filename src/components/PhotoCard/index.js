import React, { useEffect, useState, useRef } from "react";
import { Articule, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];
                if (isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            });
            observer.observe(element.current);
        });

        return () => { observer.unobserve(); }
    }, [element]);

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
                    <Button>
                        <MdFavoriteBorder size='32px'/>
                        {likes} likes!
                    </Button>
                </>
            }
        </Articule>
    );
};