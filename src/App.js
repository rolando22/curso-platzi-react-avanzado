import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo, NavBar } from "./components/";
import { Home, Detail, Favs, User, NotRegisteredUser } from "./pages/";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App () {
    const isAuth = true;

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail />} />
                <Route path="/favs" element={isAuth ? <Favs /> : <NotRegisteredUser />} />
                <Route path="/user" element={isAuth ? <User /> : <NotRegisteredUser />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
};