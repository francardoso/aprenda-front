import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SERVER_URL } from '../../../../settings';

import { selectOption, setAnswers } from '../actions/lesson';
import { showModal, hideModal } from '../actions/modal';

import Question from '../presentional/Question';
import FeedbackQuestion from '../presentional/FeedbackQuestion';

const QuestionContainer = ({
    question,
    index,
    idLesson,
}) => {
    const { questions, answers } = useSelector(state => state.lessonReducer);
    const { idUser: idStudent } = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    const [unlockActionBtn, setUnlockActionBtn] = useState(false);
    const selectedOptions = (questions.find(quest => quest.index === index) || {}).answer || [];
    const disabled = answers.findIndex(ans => ans.index === index) !== -1;
    
    useEffect(() => {
        const ansOfThisQuestionIndex = answers.findIndex(ans => ans.index === index);
        if (ansOfThisQuestionIndex !== -1) {
            selectAnswers(ansOfThisQuestionIndex);
        }
    }, [answers]);
    function onSelectOption(optionIndex) {
        if (question.type === 'single') {
            dispatch(selectOption(index, [optionIndex]));
        } else {
            const indexOfOptionOnAnsArray = selectedOptions.indexOf(optionIndex);
            const existsOnAnsArray = indexOfOptionOnAnsArray !== -1;
            if (!existsOnAnsArray) {
                dispatch(selectOption(index, [...selectedOptions, optionIndex]));
            } else {
                dispatch(selectOption(index, [
                    ...selectedOptions.slice(0, indexOfOptionOnAnsArray),
                    ...selectedOptions.slice(indexOfOptionOnAnsArray + 1, selectedOptions.length),
                ]));
            }
        }
        if (!unlockActionBtn) {
            setUnlockActionBtn(true);
        }
    }
    async function checkAnswer() {
        const questionAnswer = questions.find(quest => quest.index === index);
        const response = await fetch(`${SERVER_URL}/checkLessonQuestionAnswer`, {
            method: 'POST',
            body: JSON.stringify({
                idLesson,
                idStudent,
                questionIndex: index,
                answer: (questionAnswer || {}).answer || []
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        const ans = await response.json();
        if (ans && !ans.error) {
            const ansOfThisQuestion = ans.find((question => question.index === index));
            const { studentAnswers, questionAnswers } = ansOfThisQuestion;
            dispatch(setAnswers(ans));
            setUnlockActionBtn(false);
            dispatch(
                showModal(
                    <FeedbackQuestion 
                        isCorrect={compareAnswer(studentAnswers, questionAnswers)}
                        closeModal={() => dispatch(hideModal())}
                    />
                )
            );
        }
    }
    function compareAnswer(userAns, realAns) {
        console.log({userAns, realAns});
        return userAns.sort().join(',') === realAns.sort().join(',');
    }
    function selectAnswers(idx) {
        dispatch(selectOption(index, answers[idx].studentAnswers));
    }
    return (
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

export default QuestionContainer;