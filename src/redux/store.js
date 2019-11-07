

import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';

const middlewares = [ReduxThunk];


const store = applyMiddleware(...middlewares)(createStore)(rootReducer);
export default store;