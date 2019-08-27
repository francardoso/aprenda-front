import {combineReducers, createStore} from 'redux';
import loginReducer from '../commons/reducers/login';

const reducer = combineReducers({
    loginReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

