import React from 'react';
import { connect } from 'react-redux';

import { changeQuestionTitle } from '../actions/lesson';

import Question from '../presentational/Question';

const mapStateToProps = state =>({
    
});

const mapDispatchToProps = dispatch =>({
    _changeQuestionTitle: data => dispatch(changeQuestionTitle(data)),
});

const QuestionContainer = ({
    index,
    _changeQuestionTitle
}) =>{
    function setTitle(title){
        _changeQuestionTitle({
            title,
            index
        })
    }
    return (
        <Question
            setTitle={setTitle}
            index={index}
        />
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);
