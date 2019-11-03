// App.js is just like main component but it is connected to the store

import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as actions from '../redux/actions';

function mapStateToProps(state) {
    return {
        reservations: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;