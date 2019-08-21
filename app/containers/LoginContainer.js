import React,{useState} from 'react';
import LoginBox from '../presentational/LoginBox';
import {SERVER_URL} from '../../settings';

const LoginContainer = ()=>{
    const [loginError, setLoginError] = useState(false);
    async function loginAttempt(credentials){
        const response = await fetch(`${SERVER_URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const ans = await response.json();
        console.log('foo ans', ans);
    }
    return (
        <LoginBox
            loginAttempt={loginAttempt}
            loginError={loginError}
        />
    )
};

export default LoginContainer;