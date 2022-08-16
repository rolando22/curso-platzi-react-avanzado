import React, { useEffect, useState } from "react";
import { Category } from "../";
import { List, Item } from "./styles";

const API = 'https://petgram-api-2022.vercel.app/categories';

export function ListOfCategories () {
    const [categories, setCategories] = useState([]);
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        window.fetch(API)
            .then(resp => resp.json())
            .then(resp => setCategories(resp))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const onScroll = (event) => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {categories.map(category =>
                <Item
                    key={category.id}
                >
                    <Category
                        cover={category.cover}
                        path={category.path}
                        emoji={category.emoji}
                    />
                </Item>
            )}
        </List>
    );

    return (
        <>
            {showFixed && renderList(true)}
            {renderList()}
        </>
    );
};