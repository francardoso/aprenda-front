import React from 'react';
import { connect } from 'react-redux';

import { changeQuestionTitle, changeQuestionType } from '../actions/lesson';

import Question from '../presentational/Question';

const mapStateToProps = state =>({
    questions: state.lessonReducer.questions,
});

const mapDispatchToProps = dispatch =>({
    _changeQuestionTitle: data => dispatch(changeQuestionTitle(data)),
    _changeQuestionType: data => dispatch(changeQuestionType(data)),
});

const QuestionContainer = ({
    index,
    questions,
    _changeQuestionTitle,
    _changeQuestionType,
}) =>{
    const question = questions[index];
    function setTitle(title){
        _changeQuestionTitle({
            title,
            index
        })
    }
    function setType (type){
        _changeQuestionType({
            type,
            index
        });
    }
    return (
        <Question
            setTitle={setTitle}
            setType={setType}
            index={index}
            type={question.type}
        />
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);
