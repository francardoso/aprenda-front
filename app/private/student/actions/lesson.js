export const CLEAN_LESSON = 'CLEAN_LESSON';
export const SELECT_OPTION = 'SELECT_OPTION';
export const SET_ANSWERS = 'SET_ANSWERS';

export const cleanLesson = () =>({
    type: CLEAN_LESSON,
});

export const selectOption = (questionIndex, answer)=>({
    type: SELECT_OPTION,
    payload: {questionIndex,answer}
});

export const setAnswers = answers =>({
    type: SET_ANSWERS,
    payload: answers
});