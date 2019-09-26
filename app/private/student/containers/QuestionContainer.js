import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { selectOption, setAnswers } from '../actions/lesson';

import Question from '../presentional/Question'

const mapDispatchToProps = dispatch =>({
    _selectOption: (questionIndex, answer) => dispatch(selectOption(questionIndex,answer)),
    _setAnswers: ans => dispatch(setAnswers(ans)),
});

const mapStateToProps = state =>({
    questions: state.lessonReducer.questions,
    answers: state.lessonReducer.answers,
    idStudent: state.loginReducer.idUser,
});

const QuestionContainer = ({
    question,
    index,
    questions,
    _selectOption,
    _setAnswers,
    idLesson,
    idStudent,
    answers
})=>{
    useEffect(()=>{
        if(answers.length){
            selecteAnswers();
        }
    },[answers]);
    // const unlockActionBtn = ((questions[index] || {}).answer || []).length > 0;
    const [unlockActionBtn, setUnlockActionBtn] = useState(false);
    const selectedOption = ((questions[index] || {}).answer || [])[0];
    function onSelectOption(optionIndex){
        _selectOption(index, [optionIndex]);
        if(!unlockActionBtn){
            setUnlockActionBtn(true);
        }
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
        if(ans && !ans.error){
            const ansOfThisQuestion = ans.find((question=>question.index === index));
            const { studentAnswers, questionAnswers } =  ansOfThisQuestion;
            _setAnswers(ans);
            setUnlockActionBtn(false);
            console.log(ansOfThisQuestion);
            alert(`você acertou ${compareAnswer(studentAnswers, questionAnswers)}`);
        }
    }
    function compareAnswer(userAns, realAns){
        return userAns.sort().join(',') === realAns.sort().join(',');
    }
    function selecteAnswers(){
        answers.map(question =>{
            _selectOption(index, question.studentAnswers);
        })
    }
    return(
        <Question 
            question={question}
            onSelectOption={onSelectOption}
            selectedOption={selectedOption}
            checkAnswer={checkAnswer}
            unlockActionBtn={unlockActionBtn}
            disabled={answers.length > 0}
        />
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);