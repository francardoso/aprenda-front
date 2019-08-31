import React from 'react';

import Button from './Button';
import Input from './Input';

const LoginPasswordAndRole = ({password,onSubmit, setPassword}) =>{
    return (
        <>
            <Input 
                type='password' 
                placeholder='senha'
                onChange={(event)=>setPassword(event.target.value)}
                onKeyDown={(event)=>event.keyCode===13 && onSubmit()}
            />
            <Button onClick={onSubmit} enable={password !== ''} label='Entrar'/>
        </>
    )
};

export default LoginPasswordAndRole;

