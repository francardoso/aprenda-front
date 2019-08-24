import {combineReducers, createStore} from 'redux';
import loginReducer from './reducers/login';

const reducer = combineReducers({
    loginReducer,
});

const store = createStore(
    reducer,
);

export default store;

