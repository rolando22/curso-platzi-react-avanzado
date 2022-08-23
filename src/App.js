import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo, NavBar } from "./components/";
import { Home, Detail } from "./pages/";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App () {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get('detail');

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
};