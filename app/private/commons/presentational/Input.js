import React from 'react';

const Input = ({type, label, placeholder, onChange, onKeyDown}) =>{
    let inputElement;
    switch (type) {
        case "text":
            inputElement = 
            <div className="form-group">
                {
                    label &&
                    <label htmlFor="exampleInputEmail1">{label}</label>
                }
                <input 
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
            break;
        case 'password':
            inputElement =
            <div className="form-group">
                {
                    label && 
                    <label for="exampleInputPassword1">{label}</label>
                }
                <input 
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
        default: null
    }
    return (
        inputElement
    )
};

export default Input;