import React from 'react';
import styled from 'styled-components';
import Input from '../../../commons/presentational/Input';
import OptionsContainer from '../../containers/OptionsContainer';

import Form from './styles';


const Question = ({
    setTitle,
    setType,
    title,
    index,
    type,
}) =>{
    return(
        <Form>
            <div className='questionTypes'>
                <div className='form-group'>
                    <Input 
                        type='radio' 
                        onChange={()=>setType('single')}
                        checked={type==='single'}
                    />
                    <p>Única escolha</p>
                </div>
                <div className='form-group'>
                    <Input 
                        type='radio'
                        onChange={()=>setType('multiple')}
                        checked={type==='multiple'}
                    />
                    <p>Múltipla escolha</p>
                </div>
            </div>
            <Input 
                type='text'
                placeholder='Pergunta'
                onChange={(event)=>setTitle(event.target.value)}
                value={title}
            />
            <OptionsContainer
                questionIndex={index}
            />
        </Form>
    )
};

export default Question;