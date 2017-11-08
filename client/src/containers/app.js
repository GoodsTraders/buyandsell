import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAuth} from '../actions/actions.js';
import App from '../components/App.js';


function mapStateToProps(state) {
    console.log("state", state);
    return {
        isAuth: state.authStore.isAuth
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({toggleAuth: toggleAuth}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);