import store from './redux/store';
import { shallow } from 'enzyme';
import React from 'react';
import App from './Components/App';

describe('Connected Component', () => {
    it('Should render without any errors', () => {
        const wrapper = shallow(<App store={store}/>).childAt(0).dive();
        console.log(wrapper.debug());
        
    });
});