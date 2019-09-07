import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

//actions
import { setLessons } from '../actions/lessons';

//presentationals
import LessonsList from '../presentational/LessonsList';
import Button from '../../commons/presentational/Button';

const mapStateToProps = state =>({
    lessons: state.lessonsReducer.lessons,
});

const mapDispatchToProps = dispatch =>({
    _setLessons: lessons => dispatch(setLessons(lessons)),
});

async function getLessons(_setLessons){
    const response = await fetch(`${SERVER_URL}/getAllLessons`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials:'include'
    });
    const ans = await response.json();
    if(!ans.error){
        _setLessons(ans);
    }
};
function goToAddLesson(history){
    history.push('/professor/lessons/add');
}

const LessonsContainer = ({
    lessons,
    _setLessons,
    history
}) =>{
    useEffect(()=>{
        getLessons(_setLessons);
    },[]);
    return (
        <>
            <Button label='Nova' onClick={() => goToAddLesson(history)}/>
            <LessonsList lessons={lessons}/>
        </>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer);