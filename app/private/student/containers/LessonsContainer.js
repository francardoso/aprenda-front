import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { setLessons } from '../../commons/actions/lessons';

import LessonsList from '../presentional/LessonsList';

const mapStateToProps = state =>({
    idStudent: state.loginReducer.idUser,
    lessons: state.lessonsReducer.lessons,
});

const mapDispatchToProps = dispatch =>({
    _setLessons: lessons => dispatch(setLessons(lessons)),
});

const LessonsContainer = ({
    lessons,
    idStudent,
    _setLessons
}) =>{
    useEffect(()=>{
        if(lessons.length === 0){
            fetchUserLessons(idStudent);
        }
    },[]);
    async function fetchUserLessons(idStudent){
        const url = new URL(`${SERVER_URL}/getStudentLessons`);
        url.search = new URLSearchParams({
            idStudent
        });
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
        if(!ans.error){
            _setLessons(ans);
        }
    }
    return (
        <LessonsList
            lessons={lessons}
        />
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer);