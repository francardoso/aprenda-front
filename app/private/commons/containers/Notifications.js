import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { hideNotification } from '../actions/notifications';

import NotificationsList from '../presentational/Notifications';

const Notifications = () => {
    const dispatch = useDispatch();
    const {notifications} = useSelector(state=>state.notificationsReducer);
    function hideBox(id){
        dispatch(hideNotification(id));
    }
    return (
        <NotificationsList 
            notifications={notifications}
            hideBox={hideBox} 
        />
    )
};

export default Notifications;