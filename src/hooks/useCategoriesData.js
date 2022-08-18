import { useEffect, useState } from "react";

const API = 'https://petgram-api-2022.vercel.app/categories';

export function useCategoriesData () {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        window.fetch(API)
            .then(resp => resp.json())
            .then(resp => {
                setCategories(resp);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    return { categories, loading };
};