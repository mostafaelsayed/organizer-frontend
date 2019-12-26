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

export function getUserInSession() {
    return (dispatch) => {
        return axios.get(apiUrl + '/api/user/getUserInSession', {headers: {authorization: localStorage.getItem('jwt')}, withCredentials: true}).then((success) => {
            console.log('success get user in session : ', success);
            if (success.data.user && success.data.user.id) {
                dispatch(logUserIn(success.data.user));
            }
            else {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                dispatch(logUserOut());

            }
        }).catch((err) => {
            console.error('error get user in session : ', err);
        });
    }
}

export function startLoggingUserIn(user) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/login', user, {headers: {authorization: localStorage.getItem('jwt')}, withCredentials: true}).then((success) => {
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
        return axios.get(apiUrl + '/api/user/logout', {headers: {authorization: localStorage.getItem('jwt')}, withCredentials: true}).then((success) => {
            console.log('success logout : ', success);
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
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
