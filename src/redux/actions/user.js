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
            localStorage.setItem('token', success.data.token);
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

export function startLoggingUserInWithFacebook() {
    return (dispatch) => {
        return axios.get(apiUrl + '/login/facebook').then((success) => {
            console.log('success logging user in with facebook : ', success);
            localStorage.setItem('token', 'facebook_token');
            window.location.href = success.data;
        }).catch((err) => {
            console.error('error logging user in : ', err);
        });
    };
}

export function startLoggingUserOut(history) {
    return (dispatch) => {
        return axios.get(apiUrl + '/api/user/logout', {headers: {authorization: localStorage.getItem('token')}, withCredentials: true}).then((success) => {
            console.log('success logout : ', success);
            localStorage.removeItem('token');
            dispatch(logUserOut());
            history.push('/');
        }).catch((err) => {
            console.error('error logout : ', err);
        });
    }
}

export function logUserOut() {
    return {
        type: 'LOG_USER_OUT'
    }
}
