import React from "react";
import { ListOfCategories, ListOfPhotoCards } from "./components/";
import { GlobalStyles } from "./GlobalStyles";

export function App () {
    return (
        <>
            <GlobalStyles />
            <ListOfCategories />
            <ListOfPhotoCards />
        </>
    );
};