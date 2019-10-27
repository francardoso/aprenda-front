import React from 'react';
import styled from 'styled-components';

import Form from './styles';

import Input from '../../../commons/presentational/Input';

const Option = ({
    setTitle,
    questionType,
    setOptionSelected,
    option,
    readOnly,
    customClass
}) =>{
    return (
        <Form className={customClass ? customClass : ''}>
            <Input
                type={questionType === 'single' ? 'radio' : 'checkbox'}
                onChange={ readOnly ? () => {} : ()=>setOptionSelected()}
                checked={option.selected}
                style={{
                    backgroundColor: 'rgb(33,150,243)',

                }}
            />
            {
                !readOnly ?
                <Input 
                    type='text' 
                    placeholder='opção'
                    onChange={(event)=>setTitle(event.target.value)}
                    value={option.title}
                    style={{
                        width: '100%',
                    }}
                />
                :
                <p className={option.selected ? 'selected' : ''}>{option.title}</p>
            }
        </Form>
    )
};

export default Option;