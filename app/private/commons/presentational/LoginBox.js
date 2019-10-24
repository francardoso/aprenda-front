import React, {useState} from 'react';
import LoginUsername from './LoginUsername';
import LoginPasswordAndRole from './LoginPasswordAndRole';
import AlertBox from './AlertBox';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const Box = styled.div`
    background-color: #75CAEB;
    border: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
`;
const Title = styled.h1`
    
`;
const LoginBox = ({loginAttempt, loginStep, checkLogin})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
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