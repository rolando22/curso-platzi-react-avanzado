import React from "react";
import { LinkStyled, Image } from "./styles";

const DEFAULT_IMAGE = 'https://picsum.photos/200/100';

export function Category ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) {
    return (
        <LinkStyled to={path}>
            <Image
                src={cover}
                alt="default_image"
            />
            {emoji}
        </LinkStyled>
    );
};