import {SET_IS_LOGGED, SET_LOGIN_ERROR} from '../actions/login';

const initialState = {
    isLogged: null,
    idUser: null,
    error:{
        message: 'Houve um erro',
        show: false,
    }
}

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_IS_LOGGED:{
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_LOGIN_ERROR:{
            return {
                ...state,
                error: {
                    ...action.payload
                }
            }
        }
        default:{
            return state;
        }
    }
}

export default loginReducer;