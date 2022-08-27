import React, { useRef } from "react";
import { Form, Input, Button, Title, Error } from "./styles";

export function UserForm ({ title, loading, error, onSubmit }) {
    const form = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const user = Object.fromEntries(formData);
        onSubmit({...user});
    };

    return (
        <Form onSubmit={handleOnSubmit} ref={form}>
            <Title>{title}</Title>
            {error && <Error>{error}</Error>}
            <Input
                type="text"
                placeholder="platzi@gmail.com"
                name="email"
                disabled={loading}
                required
            />
            <Input
                type="password"
                name="password"
                disabled={loading}
                required
            />
            <Button disabled={loading}>{title}</Button>
        </Form>
    );
};