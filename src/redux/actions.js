import {database, apiUrl} from '../database/config';
import axios from 'axios';

export function startAddingUser(user) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/register', user, {withCredentials: true}).then((success) => {
            console.log('success adding user : ', success);
            dispatch(addUser(success.data.user));
        }).catch((err) => {
            console.error('error adding user : ', err);
        });
    };
}

export function startLoggingUserIn(user) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/user/login', user, {withCredentials: true}).then((success) => {
            console.log('success logging user in : ', success);
            localStorage.setItem('jwt', success.data.jwt);
            dispatch(logUserIn(success.data.user));
        }).catch((err) => {
            console.error('error logging user in : ', err);
        });
    };
}

export function startAddingReservation(reservation) {
    return (dispatch) => {
        return database.ref('Reservations').push({name: reservation}).then(() => {
            dispatch(addReservation(reservation));
        }).catch((err) => {
            console.log('error add reservation to database : ', err);
        });
    };
}

export function startLoadingReservations() {
    return (dispatch) => {
        // why withCredentials to get session to work ??
        return axios.get(apiUrl + '/api/reservation/getAll', {headers: {authorization: localStorage.getItem('jwt')}, withCredentials: true}).then((success) => {
            console.log('success load : ', success);
          
            if (success.data.message === 'Failed to authenticate token') {
                localStorage.removeItem('jwt');
                dispatch(failToken(true));
            }
            else {
                let reservations = success.data.reservations;
                dispatch(loadReservations(reservations));
            }
        }).catch((err) => {
            console.log('error load reservations : ', err);

            localStorage.removeItem('jwt');
            dispatch(failToken(true));
        });
    };
}

export function startLoadingReservation(id) {
    return (dispatch) => {
        return database.ref(`Reservations/${id}`).once('value').then((snapShot) => {
            console.log('reservation data : ', snapShot.val());
            dispatch( loadReservation(snapShot.val()) );
        }).catch((err) => {
            console.log('error fetch one reservation : ', err);
        })
    };
}


export function startRemovingReservation(index, id) {
    return (dispatch) => {
        return database.ref(`Reservations/${id}`).remove().then(() => {
            dispatch(removeReservation(index));
        })
    };
}


export function loadReservations(reservations) {
    return {
        type: "LOAD_RESERVATIONS",
        reservations
    };
}

export function loadReservation(reservation) {
    return {
        type: "LOAD_RESERVATION",
        reservation
    };
}


export function removeReservation(index) {
    return {
        type: "REMOVE_RESERVATION",
        index: index
    };
}


export function addReservation(reservation) {
    return {
        type: "ADD_RESERVATION",
        reservation: reservation
    };
}

export function addUser(user) {
    return {
        type: "ADD_USER",
        user: user
    };
}

export function logUserIn(user) {
    return {
        type: "LOG_USER_IN",
        user
    };
}

export function failToken(failTokenStatus) {
    return {
        "type": 'FAIL_TOKEN',
        failTokenStatus
    };
}