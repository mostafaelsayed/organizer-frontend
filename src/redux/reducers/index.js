import userReducer from './user-reducer';
import reservationReducer from './reservation-reducer';
import { combineReducers } from 'redux'

export default combineReducers({
    userState: userReducer,
    reservationState: reservationReducer
});