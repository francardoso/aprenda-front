import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    border: 1px solid black;
`;

import Input from '../../commons/presentational/Input';

const Option = ({
    setTitle
}) =>{
    return (
        <Form>
            <Input 
                type='text' 
                placeholder='opção'
                onChange={(event)=>setTitle(event.target.value)}
            />
        </Form>
    )
};

export default Option;