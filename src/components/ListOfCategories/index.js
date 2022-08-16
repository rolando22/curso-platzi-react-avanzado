import React from "react";
import { Category } from "../";
import db from "../../../api/db.json";
import { List, Item } from "./styles";

export function ListOfCategories () {
    return (
        <List>
            {db.categories.map(category =>
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