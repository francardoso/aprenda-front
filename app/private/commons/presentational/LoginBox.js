import React, {useState} from 'react';
import LoginUsername from './LoginUsername';
import LoginPasswordAndRole from './LoginPasswordAndRole';

const LoginBox = ({loginAttempt, loginStep, checkLogin})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Bem vindo ao aprenda</h1>
            {
                loginStep === 'login' ? 
                <LoginUsername
                    setEmail={setEmail}
                    onSubmit={()=>checkLogin(email)}
                />
                :
                <LoginPasswordAndRole
                    setPassword={setPassword}
                    onSubmit={()=>loginAttempt({email, password})}
                />
            }
        </div>
    )
};

export default LoginBox;