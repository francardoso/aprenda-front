import {combineReducers, createStore} from 'redux';
import loginReducer from '../commons/reducers/login';
import lessonsReducer from './reducers/lessons';

const reducer = combineReducers({
    loginReducer,
    lessonsReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
