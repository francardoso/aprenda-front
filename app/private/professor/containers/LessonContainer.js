import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { changeLessonTitle } from '../actions/lesson';
import { addNotification } from '../../commons/actions/notifications';

import LessonForm from '../presentational/LessonForm';

const LessonContainer = ({
    idLesson,
}) =>{
    const {title, questions} = useSelector(state => state.lessonReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    function onSave(){
        if(idLesson){
            editLesson();
        }else{
            addLesson();
        }
    }
    function _changeLessonTitle(title){
        dispatch(changeLessonTitle(title));
    }
    async function addLesson(){
        const response = await fetch(`${SERVER_URL}/addLesson`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                title,
                questions
            })
        });

        const ans = await response.json();
        if(!ans.error){
            dispatch(addNotification('Atividade adicionada com sucesso!'));
            history.push('/professor/lessons');
        }
    }
    async function editLesson(){
        const response = await fetch(`${SERVER_URL}/editLesson`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                idLesson,
                title,
                questions
            })
        });
        const ans = await response.json();

        if(!ans.error){
            dispatch(addNotification('Atividade atualizada!'));
        }
    }
    return (
        <LessonForm
            title={title}
            setTitle={_changeLessonTitle}
            addLesson={onSave}
        />
    )
}

export default LessonContainer;