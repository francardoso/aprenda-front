export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const addNotification = (message) => ({
    type: ADD_NOTIFICATION,
    payload: message,
});

export const hideNotification = (id) => ({
    type: HIDE_NOTIFICATION,
    payload: id,
});