export const CHANGE_LESSON_TITLE = 'CHANGE_LESSON_TITLE';
export const CHANGE_QUESTION_TYPE = 'CHANGE_QUESTION_TYPE';
export const ADD_QUESTION = 'ADD_QUESTION';
export const CHANGE_QUESTION_TITLE = 'CHANGE_QUESTION_TITLE';
export const ADD_OPTION = 'ADD_OPTION';
export const CHANGE_OPTION_TITLE = 'CHANGE_OPTION_TITLE';
export const SET_OPTION_SELECTED = 'SET_OPTION_SELECTED'; 
export const CLEAN_LESSON = 'CLEAN_LESSON';

export const changeLessonTitle = title =>({
    type: CHANGE_LESSON_TITLE,
    payload: title
});

export const addQuestion = () =>({
    type: ADD_QUESTION
});

export const changeQuestionTitle = data =>({
    type: CHANGE_QUESTION_TITLE,
    payload: data,
});

export const changeQuestionType = data =>({
    type: CHANGE_QUESTION_TYPE,
    payload: data,
});

export const addOption = questionIndex =>({
    type: ADD_OPTION,
    payload: questionIndex,
});

export const changeOptionTitle = data =>({
    type: CHANGE_OPTION_TITLE,
    payload: data,
});

export const setOptionSelected = data=>({
    type: SET_OPTION_SELECTED,
    payload: data,
})

export const cleanLesson = () =>({
    type: CLEAN_LESSON
});