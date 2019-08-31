import React from 'react';

const Button = ({onClick, label, enable=true}) =>{
    const extraClass = enable ? '' : 'disabled'
    return (
        <button 
            onClick={(event) => enable ? onClick(event) : {}}
            className={`btn btn-primary ${extraClass}` }>
            {label}
        </button>
    )
};

export default Button;