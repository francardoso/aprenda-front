import { 
    SET_CONTENT_TO_SHOW,
} from '../actions/subMenu';

const initialState = {
    showContent: null,
}

const subMenuReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CONTENT_TO_SHOW:
            return { ...state, showContent: action.payload };
        default:
            return state;
    }
}

export default subMenuReducer;