import { SET_LESSONS } from '../actions/lessons';

const initialState = {
    lessons: []
};

const lessonsReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_LESSONS:{
            return {
                ...state,
                lessons: action.payload
            }
        }
        default:
            return state;
    }
};

export default lessonsReducer;