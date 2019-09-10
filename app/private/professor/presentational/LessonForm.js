import React from 'react';
import styled from 'styled-components';
import Input from '../../commons/presentational/Input';
import Button from '../../commons/presentational/Button';
import QuestionsContainer from '../containers/QuestionsContainer';

const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border: 1px solid red;
`

const LessonForm = ({
    title,
    setTitle,
    addLesson,
}) =>{
    return (
        <Form>
            <Input 
                type='text'
                placeholder='Título'
                onChange={(event) => setTitle(event.target.value)}
            />
            <QuestionsContainer/>
            <Button 
                onClick={addLesson}
                label='Salvar lição'
            />
        </Form>
    )
};

export default LessonForm;