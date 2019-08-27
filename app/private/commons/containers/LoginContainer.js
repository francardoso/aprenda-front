import React,{useState} from 'react';
import {connect} from 'react-redux';
import LoginBox from '../presentational/LoginBox';
import {SERVER_URL} from '../../../../settings';
// Redux actions
import { setIsLogged } from '../actions/login';

const mapDispatchToProps = dispatch =>({
    _setIsLogged: loginData => dispatch(setIsLogged(loginData)),
});

const LoginContainer = ({history, _setIsLogged})=>{
    const [loginStep, setStep] = useState("login");
    async function loginAttempt(credentials){
        const response = await fetch(`${SERVER_URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify(credentials)
        });
        const ans = await response.json();
        if(!ans.error){
            _setIsLogged({
                isLogged: true,
                idUser: ans
            });
            history.push('/home');
        }
    }
    async function checkLogin(login){
        const url = new URL(`${SERVER_URL}/getUserByLogin`);
        url.search = new URLSearchParams({
            email:login
        })
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        if(!ans.error){
            setStep('password');
        }
    }
    return (
        <LoginBox
            loginAttempt={loginAttempt}
            loginStep={loginStep}
            checkLogin={checkLogin}
            // loginError={loginError}
        />
    )
};

export default connect(null,mapDispatchToProps)(LoginContainer);