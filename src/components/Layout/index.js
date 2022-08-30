import React from "react";
import { Helmet } from "react-helmet";
import { Div, Title } from "./styles";

export function Layout ({ children, title = '', subtitle = '', show = true }) {
    return (
        <>
            <Helmet>
                <title>{title} | Petgram🐶</title>
                <meta name="description" content={subtitle}/>
            </Helmet>
            <Div>
                {show && <Title>{title}</Title>}
                {children}
            </Div>
        </>
    );
};