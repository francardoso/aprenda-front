import {
    SHOW_MODAL,
    HIDE_MODAL,
} from '../actions/modal';

const initialState = {
    showing: false,
    content: null,
};

function modalReducer(state=initialState, action){
    switch(action.type){
        case SHOW_MODAL:{
            return {
                ...state,
                showing: true,
                content: action.payload,
            }
        }
        case HIDE_MODAL:{
            return {
                ...state,
                showing: false,
            }
        }
        default:
            return state;
    }
};

export default modalReducer;