import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { setLessons } from '../actions/lessons';
import { setContentToShow } from '../actions/subMenu';

import LessonContainer from '../containers/LessonContainer';
import LessonStudentsContainer from '../containers/LessonStudentsContainer';

import Header from '../presentational/Header';
import Layout from '../../commons/presentational/Layout';
import SubMenu from '../presentational/SubMenu';

const mapStateToProps = state => ({
    lessons: state.lessonsReducer.lessons,
    showContent: state.subMenuReducer.showContent,
});

const mapDispatchToProps = dispatch =>({
    _setLessons: lessons => dispatch(setLessons(lessons)),
    _setContentToShow: content => dispatch(setContentToShow(content)),
})

const Lesson = ({
    match:{
        params:{
            id
        }
    },
    lessons,
    _setLessons,
    _setContentToShow,
    showContent
}) =>{
    const [students, setStudents] = useState([]);
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
            }
        });
        const ans = await response.json();
        return ans;
    }
    function getLesson(idLesson){
        let lesson = lessons.find(el=>el._id === idLesson);
        fetchLesson(idLesson)
            .then(ans=>{
                if(!lesson && !ans.error){
                    _setLessons([...lessons, {title: ans.title, questions: ans.questions}]);
                    setStudents(ans.students);
                }
            })
    }
    function getContent(){
        switch(showContent){
            case 'lesson':{
                return <LessonContainer/>
            }
            case 'students':{
                return <LessonStudentsContainer
                        students={students}
                    />
            }
            default:{
                return <LessonContainer/>
            }
        }
    }
    useEffect(()=>{
        getLesson(id);
        return ()=>{
            _setContentToShow(null);
        }
    },[]);
    const options = ['lesson','students'];
    return(
        <Layout
        header={<Header/>}>
            <SubMenu 
                options={options}
                handleMenuSelect={(item)=>_setContentToShow(item)}
            />
            {getContent()}
        </Layout>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);