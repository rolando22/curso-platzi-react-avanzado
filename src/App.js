import React from "react";
import { ListOfCategories, ListOfPhotoCards, Logo } from "./components/";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App () {
    return (
        <>
            <GlobalStyles />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </>
    );
};