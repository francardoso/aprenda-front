import React from 'react';


import Input from '../../../commons/presentational/Input';
import OptionsContainer from '../../containers/OptionsContainer';
import Option from '../Option';

import Form from './styles';


const Question = ({
    setTitle,
    setType,
    title,
    index,
    type,
    readOnly,
    options=[],
    customClass
}) =>{
    return(
        <Form className={customClass ? customClass: ''}>
            <div className='questionTypes'>
                {
                    !readOnly &&
                    <>
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
                    </>  
                }
            </div>
            {
                readOnly ?
                <>
                    <h4>{title}</h4>
                    {
                        options.map((option, index)=>{
                            return <Option
                                key={index}
                                option={option}
                                questionType={type}
                                readOnly
                                customClass="option"
                            />
                        })
                    }
                </>
                :
                <>
                    <Input 
                        type='text'
                        placeholder='Pergunta'
                        onChange={(event)=>setTitle(event.target.value)}
                        value={title}
                    />
                    <OptionsContainer
                        questionIndex={index}
                    />
                </>
            }
        </Form>
    )
};

export default Question;