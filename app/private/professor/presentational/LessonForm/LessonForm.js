import React from 'react';

import Input from '../../../commons/presentational/Input';
import Button from '../../../commons/presentational/Button';
import QuestionsContainer from '../../containers/QuestionsContainer';

import Form from './styles';

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
                value={title}
            />
            <QuestionsContainer/>
            <Button 
                onClick={addLesson}
                label='Salvar lição'
                customClass='saveLessonBtn btn-success'
            />
        </Form>
    )
};

export default LessonForm;