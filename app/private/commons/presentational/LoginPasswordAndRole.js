import React,{useState} from 'react';

const LoginPasswordAndRole = ({onSubmit, setPassword}) =>{
    return (
        <>
            <input 
                type='password' 
                placeholder='senha'
                onChange={(event)=>setPassword(event.target.value)}
            />
            <button 
                onClick={onSubmit}>
                Faça Login
            </button>
        </>
    )
};

export default LoginPasswordAndRole;

