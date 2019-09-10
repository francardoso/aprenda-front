import {
    CHANGE_LESSON_TITLE, 
    ADD_QUESTION,
    CHANGE_QUESTION_TITLE,
    ADD_OPTION,
    CHANGE_OPTION_TITLE,
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
        case ADD_OPTION:{
            const questionIndex = action.payload;
            const newQuestion = {
                ...state.questions[questionIndex],
                options:[
                    ...state.questions[questionIndex].options,
                    {
                        title: '',
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
        default:{
            return state;
        }
    }
};

export default LessonReducer;