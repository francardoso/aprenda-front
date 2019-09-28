import {
    CHANGE_LESSON_TITLE, 
    ADD_QUESTION,
    CHANGE_QUESTION_TITLE,
    CHANGE_QUESTION_TYPE,
    ADD_OPTION,
    CHANGE_OPTION_TITLE,
    SET_OPTION_SELECTED,
    CLEAN_LESSON
} from '../actions/lesson';

const initialState = {
    title: '',
    questions:[]
};

const LessonReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_LESSON_TITLE:{
            return {
                ...state,
                title: action.payload
            }
        }
        case ADD_QUESTION:{
            return{
                ...state,
                questions:[
                    ...state.questions, 
                    {
                        title:'',
                        type: 'single',
                        options:[]
                    }
                ]
            }
        }
        case CHANGE_QUESTION_TITLE:{
            const questionIndex = action.payload.index;
            const newQuestion = {
                ...state.questions[questionIndex],
                title: action.payload.title,
            };
            return {
                ...state,
                questions:[
                    ...state.questions.slice(0, questionIndex),
                    newQuestion,
                    ...state.questions.slice(questionIndex +1, state.questions.length)
                ]
            }
        }
        case CHANGE_QUESTION_TYPE:{
            const questionIndex = action.payload.index;
            const newOptions = [
                ...state.questions[questionIndex].options,
            ];
            newOptions.map(option=>{
                option.selected = false;
            });
            const newQuestion = {
                ...state.questions[questionIndex],
                type: action.payload.type,
                options: newOptions,
            };
            return {
                ...state,
                questions:[
                    ...state.questions.slice(0, questionIndex),
                    newQuestion,
                    ...state.questions.slice(questionIndex +1, state.questions.length)
                ]
            }
        }
        case ADD_OPTION:{
            const questionIndex = action.payload;
            const newQuestion = {
                ...state.questions[questionIndex],
                options:[
                    ...state.questions[questionIndex].options,
                    {
                        title: '',
                        selected: false,
                    }
                ]
            };
            return{
                ...state,
                questions:[
                    ...state.questions.slice(0, questionIndex),
                    newQuestion,
                    ...state.questions.slice(questionIndex +1, state.questions.length)
                ]
            }
        }
        case CHANGE_OPTION_TITLE:{
            const questionIndex = action.payload.questionIndex;
            const optionIndex = action.payload.index;
            const newOption ={
                ...state.questions[questionIndex].options[optionIndex],
                title: action.payload.title
            }
            const newQuestion = {
                ...state.questions[questionIndex],
                options:[
                    ...state.questions[questionIndex].options.slice(0, optionIndex),
                    newOption,
                    ...state.questions[questionIndex].options.slice(optionIndex +1, state.questions[questionIndex].options.length)
                ]
            }
            return {
                ...state,
                questions:[
                    ...state.questions.slice(0, questionIndex),
                    newQuestion,
                    ...state.questions.slice(questionIndex +1, state.questions.length)
                ]
            }
        }
        case SET_OPTION_SELECTED:{
            const questionIndex = action.payload.questionIndex;
            const optionIndex = action.payload.index;
            const newOption ={
                ...state.questions[questionIndex].options[optionIndex],
                selected: action.payload.selected,
            }
            const newQuestion = {
                ...state.questions[questionIndex],
                options:[
                    ...state.questions[questionIndex].options.slice(0, optionIndex),
                    newOption,
                    ...state.questions[questionIndex].options.slice(optionIndex +1, state.questions[questionIndex].options.length)
                ]
            }
            return {
                ...state,
                questions:[
                    ...state.questions.slice(0, questionIndex),
                    newQuestion,
                    ...state.questions.slice(questionIndex +1, state.questions.length)
                ]
            }
        }
        case CLEAN_LESSON:{
            return {
                ...state,
                ...initialState
            }
        }
        default:{
            return state;
        }
    }
};

export default LessonReducer;