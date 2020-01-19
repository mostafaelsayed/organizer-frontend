// App.js is just like main component but it is connected to the store

import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/index';

function mapStateToProps(state) {
    return {
        reservations: state.reservationState.reservations,
        reservation: state.reservationState.reservation,
        user: state.userState.user,
        failTokenStatus: state.userState.failTokenStatus,
        reservationDate: state.reservationState.reservationDate,
        editClicked: state.reservationState.editClicked
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;