import React from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { Nav, LinkStyled } from "./styles";

const SIZE = '32px'

export function NavBar () {
    return (
        <Nav>
            <LinkStyled to='/'>
                <MdHome size={SIZE} />
            </LinkStyled>
            <LinkStyled to='/favs'>
                <MdFavoriteBorder size={SIZE} />
            </LinkStyled>
            <LinkStyled to='/user'>
                <MdPersonOutline size={SIZE} />
            </LinkStyled>
        </Nav>
    );
};