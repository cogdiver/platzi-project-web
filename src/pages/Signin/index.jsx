import React, { useState, useContext } from 'react';
import { Login } from '../../containers/Login'
import { AppContext } from '../../context/AppContext'


const Signin = () => {
    const { signInToken } = useContext(AppContext)

    return (
        <Login
            title={"Iniciar Sesión"}
            buttonLabel={"Iniciar sesión"}
            isSignIn={true}
            ShowNameLabel={false}
            errorLabel={"Revise los campos. Datos incorrectos"}
        />
    );
}

export { Signin };
