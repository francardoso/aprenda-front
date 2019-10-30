import React, {useState} from 'react';
import LoginUsername from '../LoginUsername';
import LoginPasswordAndRole from '../LoginPasswordAndRole';

import { Container, Box, Title } from './styles';

const LoginBox = ({loginAttempt, loginStep, checkLogin})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <Box>
                <Title>Bem vindo ao aprenda</Title>
                {
                    loginStep === 'login' ? 
                    <LoginUsername
                        setEmail={setEmail}
                        onSubmit={()=>checkLogin(email)}
                        email={email}
                    />
                    :
                    <LoginPasswordAndRole
                        setPassword={setPassword}
                        onSubmit={()=>loginAttempt({email, password})}
                        password={password}
                    />
                }
            </Box>
        </Container>
    )
};

export default LoginBox;