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
        const ansOfThisQuestionIndex = answers.findIndex(ans=>ans.index === index);
        if(ansOfThisQuestionIndex !== -1){
            selectAnswers(ansOfThisQuestionIndex);
        }
    },[answers]);
    const [unlockActionBtn, setUnlockActionBtn] = useState(false); 
    const selectedOptions = (questions.find(quest=>quest.index === index)|| {}).answer || []; 
    const disabled = answers.findIndex(ans=>ans.index === index) !== -1;
    
    function onSelectOption(optionIndex){
        if(question.type === 'single'){
            _selectOption(index, [optionIndex]);
        }else{
            const indexOfOptionOnAnsArray = selectedOptions.indexOf(optionIndex);
            const existsOnAnsArray = indexOfOptionOnAnsArray !== -1;
            if(!existsOnAnsArray){
                _selectOption(index, [...selectedOptions, optionIndex]);
            }else{
                _selectOption(index, [
                    ...selectedOptions.slice(0, indexOfOptionOnAnsArray),
                    ...selectedOptions.slice(indexOfOptionOnAnsArray +1, selectedOptions.length),
                ]);
            }
        }
        if(!unlockActionBtn){
            setUnlockActionBtn(true);
        }
    }
    async function checkAnswer(){
        const questionAnswer = questions.find(quest=>quest.index === index);
        const response = await fetch(`${SERVER_URL}/checkLessonQuestionAnswer`, {
            method: 'POST',
            body:JSON.stringify({
                idLesson,
                idStudent,
                questionIndex: index,
                answer: (questionAnswer || {}).answer || []
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
            alert(`você acertou ${compareAnswer(studentAnswers, questionAnswers)}`);
        }
    }
    function compareAnswer(userAns, realAns){
        return userAns.sort().join(',') === realAns.sort().join(',');
    }
    function selectAnswers(idx){
        _selectOption(index, answers[idx].studentAnswers);
    }
    return(
        <Question 
            question={question}
            onSelectOption={onSelectOption}
            selectedOptions={selectedOptions}
            checkAnswer={checkAnswer}
            unlockActionBtn={unlockActionBtn}
            disabled={disabled}
        />
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);