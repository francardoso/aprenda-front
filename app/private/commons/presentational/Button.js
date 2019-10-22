import React from 'react';

const Button = ({onClick, label, enable=true, customClass}) =>{
    const extraClass = enable ? '' : 'disabled'
    return (
        <button 
            onClick={(event) => enable ? onClick(event) : {}}
            className={`btn btn-primary ${extraClass} ${customClass ? customClass : ''}`.trim()}>
            {label}
        </button>
    )
};

export default Button;