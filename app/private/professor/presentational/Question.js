import React from 'react';
import styled from 'styled-components';
import Input from '../../commons/presentational/Input';
import OptionsContainer from '../containers/OptionsContainer';

const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border: 1px solid blue;
`;

const Question = ({
    setTitle,
    index
}) =>{
    return(
        <Form>
            <div className='form-group'>
                <Input type='radio' label='Única escolha'/>
                <Input type='radio' label='Múltipla escolha'/>
            </div>
            <Input 
                type='text'
                placeholder='Pergunta'
                onChange={(event)=>setTitle(event.target.value)}
            />
            <OptionsContainer
                questionIndex={index}
            />
        </Form>
    )
};

export default Question;