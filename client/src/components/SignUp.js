import React from 'react'
import ReactDOM from 'react-dom'

const firebase = require('firebase')


var config = {
  apiKey: "AIzaSyBcqCyghdma1u24QD71MmRNXWswo1CuXec",
  authDomain: "buyandsell-d4e8b.firebaseapp.com",
  databaseURL: "https://buyandsell-d4e8b.firebaseio.com",
  storageBucket: "buyandsell-d4e8b.appspot.com"
};

class SignUp extends React.Component{
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    console.log('SignUp comoponent mounted')
  }

  handleChange(event) {
  const field = event.target.name
  this.setState({ [field] : event.target.value });
}

handleSubmit(event) {
  event.preventDefault()

  this.setState({
      email: this.state.email,
      password: this.state.password
    })

    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error){
      console.log('errorCode ', error.code);
      console.log('error message ', error.message);
    });
}


  render(){
    return(
      <div>
        <h4> Our Buy and Sell App</h4>
          <div className="lendCats-form">
            <h3>Sign Up </h3>
            <form onSubmit={this.handleSubmit}>
                  <div className="text-field">Email Address <input type="text" value={this.state.email} name="email" onChange={this.handleChange} /></div>
                  <div className="text-field">Password <input type="text" value={this.state.password} name="password" onChange={this.handleChange} /></div>
                <div className="submit-button"><input type="submit" /></div>
            </form>
          </div>

      </div>
    );
  }
}

export default SignUp;
