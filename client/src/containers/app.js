import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAuth} from '../actions/actions';
import {getItems} from '../actions/getItems'
import App from '../components/App';
import Login from '../components/Login.js';


function mapStateToProps(state) {
    return {
        isAuth: state.authStore.isAuth,
        name: state.userStore.name,
        photo: state.userStore.photo,
        email: state.userStore.email,
        items: state.itemStore.items        

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({toggleAuth: toggleAuth, getItems: getItems}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);