const reservationReducer = function({reservations = [], reservation = {}, reservationDate = new Date(), editClicked = false} = {}, action) {
    console.log('action : ', action);
    switch (action.type) {

        case 'REMOVE_RESERVATION': return {"reservations": [...reservations.slice(0, action.index), ...reservations.slice(action.index + 1)], reservation, reservationDate, editClicked}
        case 'ADD_RESERVATION': return {"reservations": [...reservations, {name: action.reservation, id: reservations.length > 0 ? reservations[reservations.length - 1].id + 1 : 0}], reservation, reservationDate, editClicked}
        case 'LOAD_RESERVATIONS': return {"reservations": action.reservations, reservation, reservationDate, editClicked}
        case 'LOAD_RESERVATION': return {reservations, "reservation": action.reservation, reservationDate, editClicked}
        case 'SELECT_DATE': return {reservations, reservation, reservationDate: action.reservationDate, editClicked}
        case 'EDIT_CLICKED': return {reservations, reservation, reservationDate, editClicked: action.editClicked}
        default: return {reservations, reservation, reservationDate, editClicked};
    
    }
};

export default reservationReducer;