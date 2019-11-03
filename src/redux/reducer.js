import reservations from '../data/reservations';

const reservationReducer = function(state = reservations, action) {
    console.log(action.type);
    switch (action.type) {
        case 'REMOVE_RESERVATION': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_RESERVATION': return [...state, {name: action.reservation, id: state.length > 0 ? state[state.length - 1].id + 1 : 0}]
        case 'LOAD_RESERVATIONS': return action.reservations
        default: return state;
    }
}

export default reservationReducer;