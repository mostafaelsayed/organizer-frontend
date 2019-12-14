import store from '../redux/store';
import { mount } from 'enzyme';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Connected Component', () => {
    it('Should render without any errors', () => {
        const wrapper = mount(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
        console.log(wrapper.debug());
    });
});