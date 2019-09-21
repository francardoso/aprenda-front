import React from 'react';
import styled from 'styled-components';

const CheckboxLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    > input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark{
            background-color: #2196F3;
        }
    }
    > input:checked ~ .checkmark:after {
        display: block;
    }
    &:hover{
        > input ~ .checkmark{
            background-color: #ccc;
        }
    }
`;
const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border: #adb5bd solid 1px;
    &:after{
        content: "";
        position: absolute;
        display: none;	
        left: 4px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;  

const Input = ({
    type, 
    label, 
    placeholder, 
    onChange, 
    onKeyDown,
    checked,
    index
}) =>{
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
            break;
        case 'radio':
            inputElement =
            <div className="form-group">
                <div className="custom-control custom-radio">
                    <input 
                        type="radio" 
                        id={`customRadio${index}`} 
                        // name={`customRadio${index}`} 
                        className="custom-control-input" 
                        checked={checked}
                    />
                    <label 
                        className="custom-control-label" 
                        htmlFor={`customRadio${index}`}>{label}
                    </label>
                </div>
            </div>
            break;
        case 'checkbox':
            inputElement =
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <CheckboxLabel>
                        <input 
                            type="checkbox"
                            className="custom-control-input"
                            checked={checked}
                            onChange={onChange}
                        />
                        <CheckMark className='checkmark'/>
                    </CheckboxLabel>
                </div>
            </div>
            break;
        default: null
    }
    return (
        inputElement
    )
};

export default Input;