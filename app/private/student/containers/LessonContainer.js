import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { cleanLesson } from '../actions/lesson';

import Lesson from '../presentional/Lesson';

const mapStateToProps = state =>({
    lessons: state.lessonsReducer.lessons,
    idStudent: state.loginReducer.idUser,
});

const mapDispatchToProps = dispatch =>({
    _cleanLesson: () => dispatch(cleanLesson()),
});

const LessonContainer = ({
    idLesson,
    lessons,
    _cleanLesson,
    idStudent
})=>{
    const [lesson, setLesson] = useState({});

    async function getLesson(idLesson){
        let lesson = lessons.find(lesson=>lesson._id === idLesson);
        if(!lesson){
            lesson = await fetchLesson(idLesson);
        }
        setLesson(lesson);
    }

    async function fetchLesson(idLesson){
        const url = new URL(`${SERVER_URL}/getLesson`);
        url.search = new URLSearchParams({
            idLesson
        });
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        return ans;
    }

    async function fetchAnswer(){
        const url = new URL(`${SERVER_URL}/getStudentAnswer`);
        url.search = new URLSearchParams({
            idLesson,
            idStudent,
        });
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        console.log('foo ans', ans);
        return ans;
    }

    useEffect(()=>{
        getLesson(idLesson);
        fetchAnswer();
        return () =>{
            _cleanLesson();
        }
    },[]);
    return (
        <Lesson 
            lesson={lesson}
        />
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(LessonContainer);