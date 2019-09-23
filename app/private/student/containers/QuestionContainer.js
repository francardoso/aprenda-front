import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { selectOption } from '../actions/lesson';

import Question from '../presentional/Question'

const mapDispatchToProps = dispatch =>({
    _selectOption: (questionIndex, answer) => dispatch(selectOption(questionIndex,answer)),
});

const mapStateToProps = state =>({
    questions: state.lessonReducer.questions,
    idStudent: state.loginReducer.idUser
});

const QuestionContainer = ({
    question,
    index,
    questions,
    _selectOption,
    idLesson,
    idStudent
})=>{
    const [selectedOption, setSelectedOption] = useState(null);
    const unlockActionBtn = ((questions[index] || {}).answer || []).length > 0;
    function onSelectOption(optionIndex){
        setSelectedOption(optionIndex);
        _selectOption(index,[optionIndex]);
    }
    async function checkAnswer(){
        const questionAnswer = questions[index];
        const response = await fetch(`${SERVER_URL}/checkLessonQuestionAnswer`, {
            method: 'POST',
            body:JSON.stringify({
                idLesson,
                idStudent,
                questionIndex: index,
                answer: questionAnswer.answer || []
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include',
        });
        const ans = await response.json();
    }
    return(
        <Question 
            question={question}
            onSelectOption={onSelectOption}
            selectedOption={selectedOption}
            checkAnswer={checkAnswer}
            unlockActionBtn={unlockActionBtn}
        />
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);