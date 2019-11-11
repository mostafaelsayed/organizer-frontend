import React from 'react';
import { shallow, mount } from 'enzyme';
import Reservation from './Reservation';
import { checkProps } from '../../../Utils/index';
import AddReservation from './AddReservation';

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

    beforeEach(() => {
        mockFunc = jest.fn();
        const reservation = {name: 'doctor', id: '0'};
        component = setup({value: reservation, index: 0});
    });

    it('run without any errors', () => {
        const className = component.find('.reservation-container');
        expect(className.length).toBe(1);
    });


    it('emit callback after click', () => {
        let props = {
            addReservation: mockFunc
        };
        console.log(props);
        const form = mount(<AddReservation {...props} />).find('.add-reservation');
        // console.log(form.debug());
        form.simulate('submit');
        //console.log(mockFunc.mock);
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);

    });
});