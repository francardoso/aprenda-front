export const SET_IS_LOGGED = 'SET_IS_LOGGED';

export const setIsLogged = loginData =>({
    type: SET_IS_LOGGED,
    payload: loginData,
});
