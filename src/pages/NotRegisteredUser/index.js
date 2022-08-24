import React from "react";
import { UserForm } from "../../components";
import { useAppContext } from "../../hooks";

export function NotRegisteredUser () {
    const { login } = useAppContext();

    return (
        <UserForm login={login} />
    );
};