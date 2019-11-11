
import {addReservation, removeReservation} from './actions';
import reservationsReducer from './reducer';


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

    
});