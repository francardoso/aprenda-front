import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    border: 1px solid black;
`;

import Input from '../../commons/presentational/Input';

const Option = ({
    setTitle,
    questionType,
    setOptionSelected,
    option,
}) =>{
    return (
        <Form>
            <Input 
                type='text' 
                placeholder='opção'
                onChange={(event)=>setTitle(event.target.value)}
                value={option.title}
            />
            <Input
                type={questionType === 'single' ? 'radio' : 'checkbox'}
                onChange={()=>setOptionSelected()}
                checked={option.selected}
            />
        </Form>
    )
};

export default Option;