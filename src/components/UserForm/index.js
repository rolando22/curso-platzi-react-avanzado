import React, { useRef } from "react";

export function UserForm ({ login }) {
    const form = useRef(null);

    const handleOnSubmit = () => {
        const formData = new FormData(form.current);
        const user = Object.fromEntries(formData);
        console.log(user);
        login();
    };

    return (
        <form onSubmit={handleOnSubmit} ref={form}>
            <input type="text" placeholder="platzi@gmail.com" name="email" required/>
            <input type="password" name="password" required />
            <button>Iniciar sesión</button>
        </form>
    );
};