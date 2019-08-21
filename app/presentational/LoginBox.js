import React, {useState} from 'react';

const LoginBox = ({loginAttempt})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <h1>Bem vindo ao aprenda</h1>
            <input 
                type='text'
                placeholder='login'
                onChange={(event)=>setEmail(event.target.value)}
            />
            <input 
                type='password' 
                placeholder='senha'
                onChange={(event)=>setPassword(event.target.value)}
            />
            <button onClick={()=>loginAttempt({email,password})}>Faça Login</button>
        </div>
    )
};

export default LoginBox;