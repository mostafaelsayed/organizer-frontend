import reservations from '../data/reservations';

const reservationReducer = function(state = {reservations: reservations, reservation: {}}, action) {
    console.log(action.type);
    switch (action.type) {
        case 'REMOVE_RESERVATION': return {"reservations": [...state.reservations.slice(0, action.index), ...state.reservations.slice(action.index + 1)], "reservation": state.reservation}
        case 'ADD_RESERVATION': return {"reservations": [...state.reservations, {name: action.reservation, id: state.reservations.length > 0 ? state.reservations[state.reservations.length - 1].id + 1 : 0}], "reservation": state.reservation}
        case 'LOAD_RESERVATIONS': return {"reservations": action.reservations, "reservation": state.reservation}
        case 'LOAD_RESERVATION': return {"reservations": state.reservations, "reservation": action.reservation}
        default: return state;
    }
}

export default reservationReducer;