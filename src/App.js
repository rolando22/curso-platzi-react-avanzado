import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from "./components/";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Home } from "./pages/Home";
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
                    : 
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/category/:id" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
            }
        </>
    );
};