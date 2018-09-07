
import { AsyncStorage } from 'react-native';

export const getToken = token => ({
    type: 'GET_TOKEN',
    token,
});

export const saveToken = token => ({
    type: 'SAVE_TOKEN',
    token
});

export const loading = bool => ({
    type: 'LOADING',
    isLoading: bool,
});

export const error = error => ({
    type: 'ERROR',
    error,
});



export const getUserToken = (data) => dispatch =>
    AsyncStorage.getItem('userToken')
        .then(() => {
            dispatch(laoding(false));
            dispatch(getToken(resp.data));
        })
        .catch((err) => {
            dispatch(laoding(false));
            dispatch(error(err.message || 'ERROR'));
        })

export const saveUserToken = (data) => dispatch =>
    AsyncStorage.setItem('userToken', abc)
        .then(() => {
            dispatch(laoding(false));
            dispatch(getToken(resp.data));
        })
        .catch((err) => {
            dispatch(laoding(false));
            dispatch(error(err.message || 'ERROR'));
        })
