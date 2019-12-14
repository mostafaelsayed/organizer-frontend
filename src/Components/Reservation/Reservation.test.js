import React from 'react';
import { shallow, mount } from 'enzyme';
import Reservation from './Reservation';
import { checkProps } from '../../../Utils/index';
import AddReservation from './AddReservation';
import Reservations from './Reservations';
import ReservationDetails from './ReservationDetails';

const setup = (props={}) => {
    const component = shallow(<Reservation {...props} />);

    return component;
};


describe('Reservation Component', () => {

    let component;

    describe('Checking PropTypes', () => {
        it('does not throw warning', () => {
            const expectedProps = {
                index: 0,
                value: {
                    name: 'doctor'
                }
            };

            const propsErr = checkProps(Reservation, expectedProps);

            expect(propsErr).toBeUndefined();
        })
    });

    let mockFunc;
    let mockFunc2;

    beforeEach(() => {
        mockFunc = jest.fn();
        mockFunc.preventDefault = () => {};
        mockFunc.target = {};
        mockFunc.target.elements = {};
        mockFunc.target.elements.reservation = {};
        mockFunc.target.elements.reservation.value = 'ay 7aga';
        mockFunc2 = jest.fn();
        const reservation = {name: 'doctor', id: '0'};
        component = setup({value: reservation, index: 0});
    });

    it('run without any errors', () => {
        const className = component.find('.reservation-container');
        expect(className.length).toBe(1);
    });


    it('emit callback after click', () => {
        let props = {
            startAddingReservation: mockFunc
        };
        console.log(props);
        const form = mount(<AddReservation {...props} />).find('.reservation-form');
        form.simulate('submit');
    });

    it('remove reservation onclick', () => {
        let props = {
            startRemovingReservation: mockFunc2,
            index: 0,
            value: {
                name: '',
                id: '1'
            }
        };
        const button = shallow(<Reservation {...props} />).find('.remove');

        button.simulate('click');
    });

    it('render reservations', () => {
        let props = {
            reservations: [
                {
                    name: 'exam'
                },
                {
                    name: 'aeh'
                }
            ]
        };

        const reservations = shallow(<Reservations {...props} />);
        console.log('reservations.find(`.child-reservation`) : ', reservations.find('.child-reservation'));
        const children = reservations.find('.child-reservation').length;
        console.log('children : ', children);
        expect(children).toBe(2);
    });

    it('render ReservationDetails', () => {
        let props = {
            startLoadingReservation: jest.fn(),
            reservation: {
                name: 'doctor'
            },
            match: {
                params: {
                    id: '1'
                }
            }
        };
        
        const reservationDetails = shallow(<ReservationDetails {...props} />).find('.reservation-details');

        expect(reservationDetails.length).toBe(1);
        // why use mount ??
        const wrapper = mount(<ReservationDetails {...props} />);
        const spy = jest.spyOn(ReservationDetails.prototype, 'componentDidMount');

        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    });
});