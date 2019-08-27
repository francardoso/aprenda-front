import React, {useState} from 'react';

const LoginUsername = ({setEmail, onSubmit}) =>{
    return (
        <>
            <input 
                type='text'
                placeholder='login'
                onChange={(event)=>setEmail(event.target.value)}
            />
            <button 
                onClick={onSubmit}>
                Próximo
            </button>
        </>
    )
};

export default LoginUsername