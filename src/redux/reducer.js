//import reservations from '../data/reservations';

const reservationReducer = function({reservations = [], reservation = {}, failTokenStatus = false, user = {}, reservationDate = new Date()} = {}, action) {
    console.log('action : ', action);
    switch (action.type) {
        case 'REMOVE_RESERVATION': return {"reservations": [...reservations.slice(0, action.index), ...reservations.slice(action.index + 1)], reservation, failTokenStatus, user, reservationDate}
        case 'ADD_RESERVATION': return {"reservations": [...reservations, {name: action.reservation, id: reservations.length > 0 ? reservations[reservations.length - 1].id + 1 : 0}], reservation, failTokenStatus, user, reservationDate}
        case 'LOAD_RESERVATIONS': return {"reservations": action.reservations, reservation, failTokenStatus, user, reservationDate}
        case 'LOAD_RESERVATION': return {reservations, "reservation": action.reservation, failTokenStatus, user, reservationDate}
        case 'LOG_USER_IN' : return {reservations, reservation, "failTokenStatus": false, user, reservationDate}
        case 'LOG_USER_OUT' : return {reservations, reservation, "failTokenStatus": true, user, reservationDate}
        case 'FAIL_TOKEN': return {reservations, reservation, user, "failTokenStatus": action.failTokenStatus, reservationDate}
        case 'SELECT_DATE': return {reservations, reservation, user, failTokenStatus, reservationDate: action.reservationDate}
        default: return {reservations, reservation, user, failTokenStatus, reservationDate};
    }
};

export default reservationReducer;