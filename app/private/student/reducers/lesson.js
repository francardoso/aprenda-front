import {
    CLEAN_LESSON,
    SELECT_OPTION,
    SET_ANSWERS
} from '../actions/lesson';

const initialState = {
    questions:[],
    answers:[],
}

function lessonReducer(state=initialState, action){
    switch(action.type){
        case CLEAN_LESSON:{
            return{
                ...state,
                ...initialState
            }
        }
        case SELECT_OPTION:{
            const questionIndex = state.questions.findIndex(question=>question.index === action.payload.questionIndex);
            if(questionIndex !== -1){
                const newQuestion = {
                    ...state.questions[questionIndex],
                    answer: action.payload.answer
                }
                return{
                    ...state,
                    questions: [
                        ...state.questions.slice(0, questionIndex),
                        newQuestion,
                        ...state.questions.slice(questionIndex +1, state.questions.length)
                    ]
                }
            }else{
                return {
                    ...state,
                    questions: [
                        ...state.questions,
                        {
                            index: action.payload.questionIndex,
                            answer: action.payload.answer
                        }
                    ]
                }
            }
        }
        case SET_ANSWERS:{
            return {
                ...state,
                answers: action.payload
            }
        }
        default:{
            return state;
        }
    }
};

export default lessonReducer;