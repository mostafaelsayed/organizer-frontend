import {database} from '../database/config';


export function startAddingReservation(reservation) {
    return (dispatch) => {
        return database.ref('Reservations').push({name: reservation}).then(() => {
            dispatch(addReservation(reservation));
        }).catch((err) => {
            console.log('error add reservation to database : ', err);
        });
    }
}

export function startLoadingReservations() {
    return (dispatch) => {
        return database.ref('Reservations').once('value').then((snapShot) => {
            let reservations = [];
            snapShot.forEach((childSnapShot) => {
                let reservation = {id: childSnapShot.key};
                reservation.name = childSnapShot.val().name;
                reservations.push(reservation);
            });
            dispatch(loadReservations(reservations));
        })
    }
}


export function startRemovingReservation(index, id) {
    return (dispatch) => {
        return database.ref(`Reservations/${id}`).remove().then(() => {
            dispatch(removeReservation(index));
        })
    }
}


export function loadReservations(reservations) {
    return {
        type: "LOAD_RESERVATIONS",
        reservations
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
    }
}