import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Logo, NavBar } from "./components/";
import { Home, Detail, Favs, User, NotRegisteredUser, NotFound } from "./pages/";
import { useAppContext } from "./hooks";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App () {
    const { isAuth } = useAppContext();

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail />} />
                <Route path="/login" element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to="/" />} />
                <Route path="/favs" element={isAuth ? <Favs /> : <Navigate replace to="/login" />} />
                <Route path="/user" element={isAuth ? <User /> : <Navigate replace to="/login" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
};