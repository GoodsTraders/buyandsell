import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAuth} from '../actions/actions.js';
import SignUp from './SignUp.js';
import {FIREBASE_API} from '../../../database/config';
import axios from 'axios';


//******Firebase Authentication Setup***********//
const firebase = require('firebase')
var provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
  'display': 'popup'
});

var config = {
  apiKey: FIREBASE_API,
  authDomain: "buyandsell-d4e8b.firebaseapp.com",
  databaseURL: "https://buyandsell-d4e8b.firebaseio.com",
  storageBucket: "buyandsell-d4e8b.appspot.com"
};

firebase.initializeApp(config);
var provider = new firebase.auth.FacebookAuthProvider();



class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    username: '',
    password: '',
    submitted: false,
    error: null,
    showLogin:true
  };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
  }

  handleRegister(){
    this.setState({
      showLogin: false
    })
  }


      handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

      handleSubmit(e) {
        var context = this;
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(function(user){
            firebase.auth.Auth.Persistence.LOCAL	
            // toggle isauthorized to be true and getUser
            axios.get('/getUser',{
              params:{
                id: user.uid
              }
            }).then(function (response) {
              console.log('response ', response);
              var userObject = response.data[0]
              context.props.getUserInfo(userObject);
            })
            .catch(function (error) {
              console.log(error);
            })
            context.props.auth(true);

        }).catch((error) => {
            console.log('failed to login thru firebase', error.message)
    		});
      }


      handleFacebookLogin(){
        var context = this;
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var userObject = {
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
            password: '',
            id: user.uid
          }
          // ...
          context.props.auth(true);
          context.props.getUserInfo(userObject)
          axios.post('/newuser', userObject)
          .then(function(response) { console.log('POST SUCCESSFUL ', response, 'user was ', userObject) })
        .catch(function (error) { console.log('POST ERROR ', error) })})
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('fb login error', errorMessage)
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
        
      }

    render(){
      const { loggingIn } = this.props;
      const { username, password, submitted } = this.state;

      const login =       <div className="container login-signup-wrappers">
      <div className='row justify-content-center'>
        <div className='col-md-6'>
                      <h2>Login</h2>
                      <form name="form" onSubmit={this.handleSubmit}>
                          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                              <label htmlFor="username">Username</label>
                              <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder='Username'/>
                              {submitted && !username &&
                                  <div className="help-block">Username is required</div>
                              }
                          </div>
                          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                              <label htmlFor="password">Password</label>
                              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder='Password' />
                              {submitted && !password &&
                                  <div className="help-block">Password is required</div>
                              }
                          </div>
                          <div className="form-group">
                              <button className="btn btn-primary">Login</button>
                              <button className="btn btn-primary btn-facebook" onClick={this.handleFacebookLogin}>Facebook</button>
                              <button className='btn btn-secondary btn-sign-up' onClick={this.handleRegister}>Sign Up</button>
                          </div>
                          
                          
                      </form>
          </div>
      </div>
    </div>
      return (
      <div>
          {this.state.showLogin ? (login): <SignUp auth={this.props.auth.bind(this)} facebook={this.handleFacebookLogin} /> }
      </div>
     
        );
  }
}

export default Login;
