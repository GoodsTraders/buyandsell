import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAuth} from '../actions/actions';
import {getItems} from '../actions/getItems'
import App from '../components/App';


function mapStateToProps(state) {
    return {
        isAuth: state.authStore.isAuth,
        items: state.itemStore.items
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({toggleAuth: toggleAuth, getItems: getItems}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);