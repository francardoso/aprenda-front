import React from 'react';
import { connect } from 'react-redux';

import { addQuestion } from '../actions/lesson';

import QuestionContainer from './QuestionContainer';
import Button from '../../commons/presentational/Button';

const mapStateToProps = state =>({
    questions: state.lessonReducer.questions,
});

const mapDispatchToProps = dispatch =>({
    _addQuestion: () => dispatch(addQuestion()),
});

const QuestionsContainer = ({
    questions,
    _addQuestion
}) =>{
    return (
        <>
            {
                questions.map((question,index)=>{
                    return <QuestionContainer 
                        key={index}
                        index={index}
                    />
                })
            }
            <Button label='Nova questão' onClick={_addQuestion}/>
        </>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionsContainer);