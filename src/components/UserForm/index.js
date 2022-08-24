import React, { useRef } from "react";
import { Form, Input, Button, Title } from "./styles";

export function UserForm ({ onSubmit, title }) {
    const form = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const user = Object.fromEntries(formData);
        onSubmit({...user});
    };

    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={handleOnSubmit} ref={form}>
                <Input
                    type="text"
                    placeholder="platzi@gmail.com"
                    name="email"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    required
                />
                <Button>{title}</Button>
            </Form>
        </>
    );
};