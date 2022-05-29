import React from 'react';
import { LoginUI } from './LoginUI'

function validate_user(e, email, password) {
    e.preventDefault();
    console.log(email, password)
    const url = "http://localhost:8000/login"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "password": password,
        "email": email
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

const Login = () => {
    return (
        <div>
            <LoginUI validate_user={ validate_user } />
        </div>
    );
}

export { Login };
