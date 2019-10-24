import {
    ADD_NOTIFICATION,
    HIDE_NOTIFICATION,
} from '../actions/notifications';

const initialState = {
    notifications: [],
};

const notificationsReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_NOTIFICATION:{
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        id: state.notifications.length,
                        message: action.payload
                    }
                ]
            }
        }
        case HIDE_NOTIFICATION: {
            return{
                ...state,
                notifications: state.notifications.filter((notification) => notification.id !== action.payload)
            } 
            
        }
        default:
            return state;
    }
}

export default notificationsReducer;