import React from 'react';
import styled from 'styled-components';

import Form from './styles';

import Input from '../../../commons/presentational/Input';

const Option = ({
    setTitle,
    questionType,
    setOptionSelected,
    option,
}) =>{
    return (
        <Form>
            <Input
                type={questionType === 'single' ? 'radio' : 'checkbox'}
                onChange={()=>setOptionSelected()}
                checked={option.selected}
                style={{
                    backgroundColor: 'rgb(33,150,243)',

                }}
            />
            <Input 
                type='text' 
                placeholder='opção'
                onChange={(event)=>setTitle(event.target.value)}
                value={option.title}
                style={{
                    width: '100%',
                }}
            />
        </Form>
    )
};

export default Option;