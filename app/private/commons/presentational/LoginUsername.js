import React, {useState} from 'react';

import Button from './Button';
import Input from './Input';


const LoginUsername = ({email, setEmail, onSubmit}) =>{
    return (
        <>
            <Input 
                type='text'
                placeholder='login'
                onChange={(event)=>setEmail(event.target.value)}
                onKeyDown={(event)=>event.keyCode===13 && onSubmit()}
            />
            <Button onClick={onSubmit} enable={email !== ''} label='Próximo'/>
        </>
    )
};

export default LoginUsername