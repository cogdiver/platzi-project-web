import React, { useState } from 'react';


function LoginUI({ validate_user }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <React.Fragment>
            <form onSubmit={(e) => validate_user(e, email, password)}>
                <label>
                    Correo:
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Login" />
            </form>
        </React.Fragment>
    );
}

export { LoginUI };
