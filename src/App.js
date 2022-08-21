import React from "react";
import { ListOfCategories, ListOfPhotoCards, Logo } from "./components/";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App () {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get('detail');

    return (
        <>
            <GlobalStyles />
            <Logo />
            {
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    : <>
                        <ListOfCategories />
                        <ListOfPhotoCards />
                    </>
            }
        </>
    );
};