import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import LoginBox from '../presentational/LoginBox';
import {SERVER_URL} from '../../../../settings';
// Redux actions
import { setIsLogged } from '../actions/login';
import { addNotification } from '../actions/notifications';

const LoginContainer = ({history})=>{
    const dispatch = useDispatch();
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
            dispatch(
                setIsLogged({
                    isLogged: true,
                    idUser: ans
                })
            );
            history.push('/lessons');
        }else{
            dispatch(addNotification('Senha incorreta'));
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
        }else{
            dispatch(addNotification('Login não encontrado'));
        }
    }
    return (
        <LoginBox
            loginAttempt={loginAttempt}
            loginStep={loginStep}
            checkLogin={checkLogin}
        />
    )
};

export default LoginContainer;