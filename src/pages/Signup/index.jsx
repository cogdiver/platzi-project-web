import React from 'react';
import { Login } from '../../containers/Login'


const Signup = () => {
    return (
        <Login
            title={"Crea tu Cuenta"}
            buttonLabel={"Registrarse"}
            isSignIn={false}
            ShowNameLabel={true}
            errorLabel={"El correo ya está en uso"}
        />
    );
}

export { Signup };
