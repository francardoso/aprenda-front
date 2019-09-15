import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { changeLessonTitle, cleanLesson } from '../actions/lesson';

import LessonForm from '../presentational/LessonForm';

const mapStateToProps = state =>({
    title: state.lessonReducer.title,
    questions: state.lessonReducer.questions
});

const mapDispatchToProps = dispatch =>({
    _changeLessonTitle: title => dispatch(changeLessonTitle(title)),
    _cleanLesson: () => dispatch(cleanLesson())
});

const LessonContainer = ({
    title,
    questions,
    _changeLessonTitle,
    _cleanLesson
}) =>{
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
    }
    useEffect(()=>{
        return ()=>{
            _cleanLesson();   
        }
    },[]);
    return (
        <LessonForm
            title={title}
            setTitle={_changeLessonTitle}
            addLesson={addLesson}
        />
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonContainer);