import React from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { changeLessonTitle } from '../actions/lesson';

import LessonForm from '../presentational/LessonForm';

const mapStateToProps = state =>({
    title: state.lessonReducer.title,
    questions: state.lessonReducer.questions
});

const mapDispatchToProps = dispatch =>({
    _changeLessonTitle: title => dispatch(changeLessonTitle(title)),
});

const LessonContainer = ({
    title,
    questions,
    _changeLessonTitle
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
        console.log({title, questions});
    }
    return (
        <LessonForm
            title={title}
            setTitle={_changeLessonTitle}
            addLesson={addLesson}
        />
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonContainer);