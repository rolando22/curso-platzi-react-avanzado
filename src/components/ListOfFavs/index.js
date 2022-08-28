import React from "react";
import { LinkStyled, Grid, Img } from "./styles";

export function ListOfFavs ({ favs = [] }) {
    return (
        <Grid>
            {
                favs.map(fav => (
                    <LinkStyled
                        key={fav.id}
                        to={`/detail/${fav.id}`}
                    >
                        <Img src={fav.src} />
                    </LinkStyled>
                ))
            }
        </Grid>
    );
};