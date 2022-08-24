import React, { useRef } from "react";
import { Form, Input, Button, Title } from "./styles";

export function UserForm ({ login, title }) {
    const form = useRef(null);

    const handleOnSubmit = () => {
        const formData = new FormData(form.current);
        const user = Object.fromEntries(formData);
        console.log(user);
        login();
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