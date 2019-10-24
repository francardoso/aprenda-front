import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import AppRoutes from './appRoutes';
import Notifications from '../commons/containers/Notifications';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
        <Notifications/>
    </Provider>
    ,           
    document.getElementById('root')
);

