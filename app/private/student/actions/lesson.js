export const CLEAN_LESSON = 'CLEAN_LESSON';
export const SELECT_OPTION = 'SELECT_OPTION';

export const cleanLesson = () =>({
    type: CLEAN_LESSON,
});

export const selectOption = (questionIndex, answer)=>({
    type: SELECT_OPTION,
    payload: {questionIndex,answer}
});