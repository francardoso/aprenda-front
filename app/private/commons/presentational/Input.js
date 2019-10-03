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
    border-radius: ${props=>props.type === 'radio' ? '50%' : 0};
    &:after{
        content: "";
        position: absolute;
        display: none;	
        left: 4px;
        top: ${props=>props.type === 'radio' ? '4px' : '1px'};
        width: 5px;
        height: ${props=>props.type === 'radio' ? '5px' : '10px'};
        border: solid white;
        border-width: ${props=>props.type === 'radio' ? 'initial' :'0 3px 3px 0'};
        border-radius: ${props=>props.type === 'radio' ? '50%' : 0};
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
    disabled = false,
    index,
    style
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
            <div className="form-group" style={{...style}}>
                <div className="custom-control custom-radio">
                    <CheckboxLabel>
                        <input 
                            type="radio"
                            className="custom-control-input" 
                            checked={checked}
                            onChange={onChange}
                            disabled={disabled}
                        />
                        <CheckMark 
                            className='checkmark'
                            type={'radio'}
                        />
                    </CheckboxLabel>
                </div>
            </div>
            break;
        case 'checkbox':
            inputElement =
            <div className="form-group" style={{...style}}>
                <div className="custom-control custom-checkbox">
                    <CheckboxLabel>
                        <input 
                            type="checkbox"
                            className="custom-control-input"
                            checked={checked}
                            onChange={onChange}
                            disabled={disabled}
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