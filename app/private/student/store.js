import {combineReducers, createStore} from 'redux';

import loginReducer from '../commons/reducers/login';
import lessonsReducer from '../commons/reducers/lessons';
import notificationsReducer from '../commons/reducers/notifications';
import lessonReducer from './reducers/lesson';
import modalReducer from './reducers/modal';

const reducer = combineReducers({
    loginReducer,
    lessonsReducer,
    lessonReducer,
    modalReducer,
    notificationsReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

