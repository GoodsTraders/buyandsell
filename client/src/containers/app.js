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
<<<<<<< 5a29a9bc7c73ddfb41ea326f6529a47dd689a0fc
        items: state.itemStore.items
=======
        name: state.userStore.name,
        photo: state.userStore.photo,
        email: state.userStore.email

>>>>>>> Added new userStore which keeps track of user's name, photo, email globally
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({toggleAuth: toggleAuth, getItems: getItems}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);