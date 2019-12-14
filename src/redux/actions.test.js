import {startAddingReservation, startLoadingReservation, startLoadingReservations, startRemovingReservation} from './actions';


it('add reservation in backend', () => {
    let mockActionToDispatch = jest.fn();

    startAddingReservation({name: 'ay 7aga'})(mockActionToDispatch).then(() => {

    }).catch(() => {
        
    });
});

it('return single reservation', () => {
    let mockActionToDispatch = jest.fn();
    
    startLoadingReservation('-Lt-dIo5vdwXrhvH9zgW')(mockActionToDispatch).then((data) => {
        //console.log('one reservation test : ', data);
        //expect(data.name).toBe('club');
    }).catch;
});

it('return all reservations', () => {
    let mockActionToDispatch = jest.fn();
    
    startLoadingReservations()(mockActionToDispatch).then((data) => {
        // console.log('all reservations test : ', data);
        // expect(data.length).toEqual(2);
    }).catch;
});

it('remove one reservation', () => {
    let mockActionToDispatch = jest.fn();
    
    startRemovingReservation(0, '-Lt-dIo5vdwXrhvH9zgW')(mockActionToDispatch).then((data) => {
        // console.log('remove reservation test : ', data);
        // expect(data.type).toMatch(/REMOVE_RESERVATION/);
    }).catch;
});