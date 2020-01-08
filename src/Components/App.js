// App.js is just like main component but it is connected to the store

import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/index';

function mapStateToProps(state) {
    return {
        reservations: state.reservations,
        reservation: state.reservation,
        "user": state.user,
        "failTokenStatus": state.failTokenStatus,
        "reservationDate": state.reservationDate
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;