import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Logo, NavBar } from "./components/";
import { useAppContext } from "./hooks";
import { GlobalStyles } from "./styles/GlobalStyles";

const Detail = React.lazy(() => import ("./pages/")
    .then(module => ({ default: module.Detail })));
const Favs = React.lazy(() => import("./pages/")
    .then(module => ({ default: module.Favs })));
const Home = React.lazy(() => import("./pages/")
    .then(module => ({ default: module.Home })));
const NotFound = React.lazy(() => import("./pages/")
    .then(module => ({ default: module.NotFound })));
const NotRegisteredUser = React.lazy(() => import("./pages/")
    .then(module => ({ default: module.NotRegisteredUser })));
const User = React.lazy(() => import("./pages/")
    .then(module => ({ default: module.User })));

export function App () {
    const { isAuth } = useAppContext();

    return (
        <Suspense fallback={<div />}>
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
        </Suspense>
    );
};