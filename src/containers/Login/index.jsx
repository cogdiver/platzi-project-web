import React, { useState, useContext, useRef } from 'react';
import { Form, Container } from './styles'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { signToken } from './getLogin'



const Login = ({ title, buttonLabel, isSignIn, ShowNameLabel, errorLabel }) => {
    const [wait, setWait] = useState(false)
    const [error, setError] = useState(0);
    const { login, setLogin } = useContext(AppContext);
    const form = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current)
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
            name: formData.get('name')
        }

        if (isSignIn) {
            console.log('isSignIn', isSignIn)
            signToken("signin", setLogin, setWait, data)
        } else {
            signToken("signup", setLogin, setWait, data)
        }

        setError(error + 1)
    }

    return (
        <>
            {login ?
                <Navigate replace={true} to='/home' /> :
                <Container>
            
                    <Form ref={form} >
                        <h1>{title}</h1>
                    
                        {ShowNameLabel &&
                            <input type="text"
                                placeholder="Name"
                                name="name" />
                        }

                        <input type="email"
                            placeholder="Email"
                            name="email" />
                            
                        <input type="password"
                            placeholder="Password"
                            name="password" />

                        {error > 0 & !wait & !login ? <span>{errorLabel}</span> : ''}

                        <button onClick={handleSubmit}>{buttonLabel}</button>
                        {isSignIn && <a href="#">Olvidaste tu contraseña?</a>}
                    </Form>
                </Container>
            }
        </>
    );
}

export { Login };
