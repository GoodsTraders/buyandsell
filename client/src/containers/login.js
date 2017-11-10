import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUserInfo} from '../actions/getUserInfo.js';
import Login from '../components/Login.js';


function mapStateToProps(state) {
    return {
        name: state.userStore.name,
        photo: state.userStore.photo,
        email: state.userStore.email
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getUserInfo: getUserInfo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);