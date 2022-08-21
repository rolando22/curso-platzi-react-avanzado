import { useState } from "react";

export function useLocalStorage (key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        };
    });

    const setLocalStorage = (newValue) => () => {
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue));
            setValue(newValue);
        } catch (error) {
            console.log(error);
        };
    };

    return [value, setLocalStorage];
};