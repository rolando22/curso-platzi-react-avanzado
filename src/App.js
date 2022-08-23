import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo, NavBar } from "./components/";
import { Home, Detail } from "./pages/";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App () {
    const isAuth = false;

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