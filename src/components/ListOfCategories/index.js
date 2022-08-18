import React, { useEffect, useState } from "react";
import { Category } from "../";
import { useCategoriesData } from "../../hooks/useCategoriesData";
import { List, Item } from "./styles";

export function ListOfCategories () {
    const [showFixed, setShowFixed] = useState(false);
    const { categories, loading } = useCategoriesData();

    useEffect(() => {
        const onScroll = (event) => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading
                    ? [1,2,3,4,5,6].map(skeletor => 
                        <Item
                            key={skeletor}>
                            <Category />
                        </Item>)
                    : categories.map(category =>
                        <Item
                            key={category.id}
                        >
                            <Category
                                cover={category.cover}
                                path={category.path}
                                emoji={category.emoji}
                            />
                        </Item>)
            }
        </List>
    );

    return (
        <>
            {showFixed && renderList(true)}
            {renderList()}
        </>
    );
};