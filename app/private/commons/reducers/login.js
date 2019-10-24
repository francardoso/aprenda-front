import {SET_IS_LOGGED} from '../actions/login';

const initialState = {
    isLogged: null,
    idUser: null,
}

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_IS_LOGGED:{
            return {
                ...state,
                ...action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default loginReducer;