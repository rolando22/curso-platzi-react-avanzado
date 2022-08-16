import React, { useEffect, useState } from "react";
import { Category } from "../";
import { List, Item } from "./styles";

const API = 'https://petgram-api-2022.vercel.app/categories';

export function ListOfCategories () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        window.fetch(API)
            .then(resp => resp.json())
            .then(resp => setCategories(resp))
            .catch(err => console.log(err));
    }, []);

    return (
        <List>
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
};