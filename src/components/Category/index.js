import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE = 'https://picsum.photos/200/100';

export function Category ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) {
    return (
        <Anchor href={path}>
            <Image
                src={cover}
                alt="default_image"
            />
            {emoji}
        </Anchor>
    );
};