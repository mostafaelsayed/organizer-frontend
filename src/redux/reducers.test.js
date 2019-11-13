
import {addReservation, removeReservation, loadReservations, loadReservation} from './actions';
import reservationsReducer from './reducer';
import reservationReducer from './reducer';


describe('Reservations Reducer', () => {
    it('Should return default state', () => {
        const newState = reservationsReducer(undefined, {});
        expect(newState).toEqual({reservations: [], reservation: {}});
    });

    it('add reservation', () => {
        const newState = reservationsReducer(undefined, addReservation('doctor'));
        //console.log('newState : ', newState);
        expect(newState.reservations[0].name).toEqual('doctor');
    });

    it('remove reservation', () => {
        const newState = reservationsReducer({reservations: [{'name': 'ay 7aga'}], reservation: {}}, removeReservation(0));
        console.log('newState : ', newState);
        expect(newState.reservations.length).toEqual(0);
    });

    it('load reservations : ', () => {
        const reservations = reservationReducer({reservation: {}}, loadReservations([]));
        expect(reservations).toEqual({"reservation": {}, "reservations": []});
    });

    it('load one reservation', () => {
        const reservation = reservationReducer({reservations: [{name: 'doctor', id: '2'}]}, loadReservation({name: 'doctor', id: '2'}));
        expect(reservation).toEqual({reservations: [{name: 'doctor', id: '2'}], reservation: {name: 'doctor', id: '2'}});
    });

    // describe('Return Modified state', () => {
    //     it('return state after add reservation', () => {
            
    //     });
    // });

    
});