
import {addReservation, removeReservation} from './actions';
import reservationsReducer from './reducer';


describe('Reservations Reducer', () => {
    it('Should return default state', () => {
        const newState = reservationsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if received action', () => {
        const newState = reservationsReducer(undefined, addReservation('doctor'));
        console.log('newState : ', newState);
        expect(newState).toEqual([{name: 'doctor', id: 0}]);
    });
});