import {combineReducers, createStore} from 'redux';

import loginReducer from '../commons/reducers/login';
import lessonsReducer from '../commons/reducers/lessons';
import lessonReducer from './reducers/lesson';

const reducer = combineReducers({
    loginReducer,
    lessonsReducer,
    lessonReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

