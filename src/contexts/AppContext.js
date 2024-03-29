import React, { createContext } from "react";
import { useInitialState } from "../hooks";

export const AppContext = createContext({});

export function AppProvider ({ children }) {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            {children}
        </AppContext.Provider>
    );
};