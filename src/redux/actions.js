import {apiUrl} from '../database/config';
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


export function startAddingReservation(reservation, userId) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/reservation/add', {userId: userId, reservation: {name: reservation}}, {headers: {authorization: localStorage.getItem('jwt')}, withCredentials: true}).then((success) => {
            console.log('success adding reservation : ', success);
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

// export function startLoadingReservation(id) {
//     return (dispatch) => {
//         return database.ref(`Reservations/${id}`).once('value').then((snapShot) => {
//             console.log('reservation data : ', snapShot.val());
//             dispatch( loadReservation(snapShot.val()) );
//         }).catch((err) => {
//             console.log('error fetch one reservation : ', err);
//         })
//     };
// }


// export function startRemovingReservation(index, id) {
//     return (dispatch) => {
//         return database.ref(`Reservations/${id}`).remove().then(() => {
//             dispatch(removeReservation(index));
//         })
//     };
// }


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

export function startLogginUserOut() {
    return (dispatch) => {
        return axios.get(apiUrl + '/api/user/logout').then((success) => {
            console.log('success logout : ', success);
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            dispatch(logUserOut());
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