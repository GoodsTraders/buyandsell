import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Login from './Login.js';
import FIREBASE_API from '../../../database/config';
import {Button,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

const firebase = require('firebase')


var config = {
  apiKey: FIREBASE_API,
  authDomain: "buyandsell-d4e8b.firebaseapp.com",
  databaseURL: "https://buyandsell-d4e8b.firebaseio.com",
  storageBucket: "buyandsell-d4e8b.appspot.com"
};

class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      name: '',
      showSignUp: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    console.log('SignUp comoponent mounted')
    console.log('this.props,', this.props)
  }

  handleChange(event) {
  const field = event.target.name
  this.setState({ [field] : event.target.value });
  
}

handleSubmit(event) {
  var context = this;
  console.log('SOMETHINGHERETEST');
  console.log('context.props', context.props);

  event.preventDefault()

  context.setState({
      email: context.state.email,
      password: context.state.password,
      name: context.state.name,
      showSignUp: false
    })
    console.log('state', context.state)

    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(user){
      console.log('I want user and user uid ', user, user.uid);
      const newUser = {
        email: context.state.email,
        password: context.state.password,
        name: context.state.name,        
        id: user.uid
      }
      axios.post('/newuser', newUser)
        .then(function(response) { console.log('POST SUCCESSFUL ', response, 'user was ', newUser) })
      .catch(function (error) { console.log('POST ERROR ', error) })
    }).catch(function(error){
      console.log('errorCode ', error.code);
      console.log('error message ', error.message);
    });
}



  render(){
  const signUp =       <div className="container">
    <div className='row justify-content-center'>
      <div className='col-md-6'>
      <h3>Sign Up </h3>
      <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name </label>
              <input type="text" className='form-control' value={this.state.name} name="name" onChange={this.handleChange} placeholder='Full Name'/>
            </div>
            <div className="form-group">
              <label>Email Address </label>
              <input type="text" className='form-control' value={this.state.email} name="email" onChange={this.handleChange} placeholder='Email Address'/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type='password' className='form-control' value={this.state.password} name="password" onChange={this.handleChange} placeholder='Password' />
            </div>
          <button className="btn btn-primary" type='submit'>Submit</button>
          <button className="btn btn-primary btn-facebook" onClick={this.props.facebook}>Sign Up With Facebook</button>
      </form>

 </div>
</div>
</div>
    return(
      <div>
        {(this.state.showSignUp ? (signUp) : <Login auth={this.props.auth}/> )}
        
      </div>
    );
  }
}

export default SignUp;
