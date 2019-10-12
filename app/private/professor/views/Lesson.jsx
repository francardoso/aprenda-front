import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { setLessons } from '../../commons/actions/lessons';
import { setLesson, cleanLesson } from '../actions/lesson';
import { setContentToShow } from '../actions/subMenu';

import LessonContainer from '../containers/LessonContainer';
import LessonStudentsContainer from '../containers/LessonStudentsContainer';
import HeaderContainer from '../containers/HeaderContainer';

import Layout from '../../commons/presentational/Layout';
import SubMenu from '../presentational/SubMenu';

const Lesson = ({
    match:{
        params:{
            id
        }
    },
}) =>{
    const [students, setStudents] = useState([]);
    const dispatch = useDispatch();
    const { lessons } = useSelector(state => state.lessonsReducer);
    const { showContent } = useSelector(state => state.subMenuReducer);
    const { title, questions } = useSelector(state=> state.lessonReducer);
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
    function getLesson(idLesson){
        const lesson = lessons.find(el=>el._id === idLesson);
        if(lesson){
            setStudents(lesson.students);
            dispatch(setLesson(lesson));
        }else{
            fetchLesson(idLesson)
                .then(ans=>{
                    if(!ans.error){
                        dispatch(setLessons([...lessons, {title: ans.title, questions: ans.questions}]));
                        dispatch(setLesson({title: ans.title, questions: ans.questions}));
                        setStudents(ans.students);
                    }
                })
        }
    }
    function getContent(){
        switch(showContent){
            case 'lesson':{
                return (
                    <LessonContainer 
                        idLesson={id}
                        title={title}
                        questions={questions}
                    />
                )
            }
            case 'students':{
                return <LessonStudentsContainer
                        setStudents={setStudents}
                        students={students}
                        idLesson={id}
                    />
            }
            default:{
                return (
                    <LessonContainer 
                        idLesson={id}
                        title={title}
                        questions={questions}
                    />
                )
            }
        }
    }
    useEffect(()=>{
        getLesson(id);
        return ()=>{
            dispatch(setContentToShow(null));
        }
    },[]);
    const options = ['lesson','students'];
    return(
        <Layout
            header={<HeaderContainer/>}>
            <SubMenu 
                options={options}
                handleMenuSelect={(item)=>dispatch(setContentToShow(item))}
            />
            {getContent()}
        </Layout>
    )
};

export default Lesson;