import React from "react";
import { useLocation } from "react-router-dom";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { Nav, LinkStyled } from "./styles";

const SIZE = '32px';

export function NavBar () {
    const { pathname } = useLocation();

    const setCurrentPath = (path) => (
        pathname === path ? 'selected' : ''
    );

    return (
        <Nav>
            <LinkStyled to='/' className={setCurrentPath('/')}>
                <MdHome size={SIZE} />
            </LinkStyled>
            <LinkStyled to='/favs' className={setCurrentPath('/favs')}>
                <MdFavoriteBorder size={SIZE} />
            </LinkStyled>
            <LinkStyled to='/user' className={setCurrentPath('/user')}>
                <MdPersonOutline size={SIZE} />
            </LinkStyled>
        </Nav>
    );
};