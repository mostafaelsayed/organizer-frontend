
import {apiUrl} from '../../database/config';
import axios from 'axios';

export function startAddingReservation(reservation, userId, history) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/reservation/add', {userId: userId, reservation: {name: reservation}}, {headers: {authorization: localStorage.getItem('token')}, withCredentials: true}).then((success) => {
            console.log('success adding reservation : ', success);
            dispatch(addReservation(reservation));
            history.push('/reservations');
        }).catch((err) => {
            console.error('error add reservation to database : ', err);
        });
    };
}

export function startLoadingReservations() {
    return (dispatch) => {
        // why withCredentials to get session to work ??
        return axios.get(apiUrl + '/api/reservation/getAll', {headers: {authorization: localStorage.getItem('token')}, withCredentials: true}).then((success) => {
            console.log('success load : ', success);
          
            let reservations = success.data.reservations;
            dispatch(loadReservations(reservations));

        }).catch((err) => {
            console.error('error load reservations : ', err);

            localStorage.removeItem('token');
            dispatch(failToken(true));
        });
    };
}

export function startLoadingReservation(id) {
    return (dispatch) => {
        return axios.get(apiUrl + `/api/reservation/get/${id}`, {headers: {authorization: localStorage.getItem('token')}, withCredentials: true}).then((success) => {
            console.log('success get reservation : ', success);
            dispatch( loadReservation(success.data.reservation) );
        }).catch((err) => {
            console.error('error fetch one reservation : ', err);
            localStorage.removeItem('token');
            dispatch(failToken(true));
        })
    };
}


export function startRemovingReservation(index, id) {
    return (dispatch) => {
        return axios.post(apiUrl + '/api/reservation/delete', {reservationId: id}, {headers: {authorization: localStorage.getItem('token')}, withCredentials: true}).then((success) => {
            console.log('success delete reservation : ', success);
            dispatch(removeReservation(index));
        }).catch((err) => {
            console.error('error delete reservation : ', err);
        });
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

export function failToken(failTokenStatus) {
    return {
        "type": 'FAIL_TOKEN',
        failTokenStatus
    };
}