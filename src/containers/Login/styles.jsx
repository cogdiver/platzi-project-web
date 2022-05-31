import styled from 'styled-components';


const Form = styled.form`
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    & input {
        background: #03091e;
        border: 1px solid #8da2c0;
        border-radius: 10px;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        color: #fff;
    }
    & a {
        color: #98ca3f;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }
    & h1 {
        font-weight: bold;
        margin: 0 0 20px 0;
    }
    & button {
        margin-top: 20px;
        border-radius: 20px;
        border: None;
        background: #98ca3f;
        color: #0c1633;
        font-size: 15px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    & button:hover {
        background: #c1df8b;
        cursor: pointer;
    }
    & span {
        color: #ff4842;
        font-size: 15px;
    }
`;

const Container = styled.div`
    margin: auto;
    padding: 0 10px;
    background: #0c1633;
    border-radius: 10px;
    position: relative;
    width: 400px;
    max-width: 100%;
    min-height: 400px;
    display: flex;
`;

export { Form, Container };
