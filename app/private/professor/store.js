import {combineReducers, createStore} from 'redux';
import loginReducer from '../commons/reducers/login';
import lessonsReducer from './reducers/lessons';
import lessonReducer from './reducers/lesson';
import subMenuReducer from './reducers/subMenu';
import usersReducer from './reducers/users';

const reducer = combineReducers({
    loginReducer,
    lessonsReducer,
    lessonReducer,
    subMenuReducer,
    usersReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
