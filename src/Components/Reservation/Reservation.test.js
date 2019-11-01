import React from 'react';

import { shallow } from 'enzyme';

import Reservation from './Reservation';

import { checkProps } from '../../../Utils/index';

const setup = (props={}) => {
    const component = shallow(<Reservation {...props} />);

    return component;
};


describe('Reservation Component', () => {

    let component;

    describe('Checking PropTypes', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                index: 0,
                value: {
                    name: 'doctor'
                }
            };

            const propsErr = checkProps(Reservation, expectedProps);

            expect(propsErr).toBeUndefined();
        })
    })

    beforeEach(() => {
        const reservation = {name: 'doctor', id: 0};
        component = setup({value: reservation, index: 0});
    })

    it('It should run without any errors', () => {
        const className = component.find('.reservation-container');
        expect(className.length).toBe(1);
    });
});