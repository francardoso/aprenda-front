export const SET_IS_LOGGED = 'SET_IS_LOGGED';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export const setIsLogged = loginData =>({
    type: SET_IS_LOGGED,
    payload: loginData,
});

export const setLoginError = error =>({
    type: SET_LOGIN_ERROR,
    payload: error
});