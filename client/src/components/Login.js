import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleAuth} from '../actions/actions.js';
import {login} from '../actions/login'



//******Firebase Authentication Setup***********//
const firebase = require('firebase')
var provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
  'display': 'popup'
});

var config = {
  apiKey: "AIzaSyBcqCyghdma1u24QD71MmRNXWswo1CuXec",
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
    submitted: false
  };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


      handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

      handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }

        // firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error){
        // console.log('errorCode ', error.code);
        // console.log('error message ', error.message);
      }



    render(){
      const { loggingIn } = this.props;
      const { username, password, submitted } = this.state;




      return (
        <div className="col-md-6 col-md-offset-3">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Router history={browserHistory}>
                                    <div>
                                        <Route path="/login" component={App} />
                                        <Route path="/register" component={SignUp} />
                                    </div>
                                </Router>
                                <Link to="/register" className="btn btn-link">Register</Link>
                            </div>
                        </form>
                    </div>
        );
  }
}

export default connect(null)Login;
