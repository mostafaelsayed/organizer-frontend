import {apiUrl} from '../../database/config';
import axios from 'axios';

export function startAddingUser(user) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/register', user).then((success) => {
            console.log('success adding user : ', success);
            dispatch(addUser(success.data.user));
        }).catch((err) => {
            console.error('error adding user : ', err);
        });
    };
}

export function addUser(user) {
    return {
        type: "ADD_USER",
        user: user
    };
}

export function startLoggingUserIn(user) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/login', user).then((success) => {
            console.log('success logging user in : ', success);
            localStorage.setItem('jwt', success.data.jwt);
            dispatch(logUserIn(success.data.user));
        }).catch((err) => {
            console.error('error logging user in : ', err);
        });
    };
}

export function logUserIn(user) {
    return {
        type: "LOG_USER_IN",
        user
    };
}

export function startLogginUserOut(history) {
    return (dispatch) => {
        console.log('success logout');
        localStorage.removeItem('jwt');
        dispatch(logUserOut());
        history.push('/');
    }
}

export function logUserOut() {
    return {
        type: 'LOG_USER_OUT'
    }
}
