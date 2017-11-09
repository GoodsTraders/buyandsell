import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {navView} from '../actions/actions.js';
import NavBar from '../components/NavBar.js';

// function mapStateToProps(state) {
//   return {

//   }
// }

function matchDispatchToProps(dispatch) {
  console.log(navView);
  return bindActionCreators({navView: navView}, dispatch);
}

export default connect(matchDispatchToProps)(NavBar);