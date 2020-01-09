import {apiUrl} from '../../database/config';
import axios from 'axios';

export function startAddingUser(user, history) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/register', user).then((success) => {
            console.log('success adding user : ', success);
            localStorage.setItem('token', success.data.token);
            dispatch(logUserIn());
            history.push('/reservations');
        }).catch((err) => {
            console.error('error adding user : ', err);
        });
    };
}

export function sendConfirmationMail(code) {
    return () => {
        return axios.get(apiUrl + '/confirm_email?code=' + code).then(() => {
            console.log('success resend confirmation mail');
            alert('confirmation mail sent');
        }).catch((err) => {
            console.error('error send confirmation mail : ', err);
        });
    };
}

export function startLoggingUserIn(user, history) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/login', user).then((success) => {
            console.log('success logging user in : ', success);
            localStorage.setItem('token', success.data.token);
            dispatch(logUserIn());
            history.push('/reservations');
        }).catch((err) => {
            console.error('error logging user in : ', err);
        });
    };
}

export function logUserIn() {
    return {
        type: "LOG_USER_IN"
    };
}

export function startLoggingUserInWithFacebook() {
    return () => {
        return axios.get(apiUrl + '/login/facebook').then((success) => {
            console.log('success logging user in with facebook : ', success);
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
    };
}

export function logUserOut() {
    return {
        type: 'LOG_USER_OUT'
    };
}
