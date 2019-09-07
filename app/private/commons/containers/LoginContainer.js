import React,{useState} from 'react';
import {connect} from 'react-redux';
import LoginBox from '../presentational/LoginBox';
import {SERVER_URL} from '../../../../settings';
// Redux actions
import { setIsLogged, setLoginError } from '../actions/login';

const mapStateToProps = state =>({
    loginError: state.loginReducer.error
});

const mapDispatchToProps = dispatch =>({
    _setIsLogged: loginData => dispatch(setIsLogged(loginData)),
    _setLoginError: error => dispatch(setLoginError(error)),
});

const LoginContainer = ({history, _setIsLogged, _setLoginError, loginError})=>{
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
            history.push('/lessons');
        }else{
            _setLoginError({
                show: true,
                message: 'Senha incorreta'
            });
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
            _setLoginError({
                show: false,
                message: ''
            });
        }else{
            _setLoginError({
                show: true,
                message: 'Login não encontrado'
            });
        }
    }
    return (
        <LoginBox
            loginAttempt={loginAttempt}
            loginStep={loginStep}
            checkLogin={checkLogin}
            loginError={loginError}
            hideError={()=>_setLoginError({show:false,message:''})}
        />
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);