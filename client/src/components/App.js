import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../components/ItemList';
import Home from './Home.js';
import AddItem from './AddItem.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Login from '../containers/login';
import { Nav, Navbar, NavItem } from "react-bootstrap";
const firebase = require('firebase');



class App extends React.Component {

    componentDidMount() {
        var context = this;
        axios.get('http://localhost:1337/getDb')
        .then(function (response) {
            console.log(response.data);
            context.props.getItems(response.data)
        })
        .catch(function (error) {
            console.log('Error', error);
        })
    }

    handleClick(){
        var context = this;
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('signed out', context.props)
            context.props.toggleAuth(!context.props.isAuth);
            //ßthis.props.toggleAuth(!this.props.isAuth)
          }).catch(function(error) {
            // An error happened.
            console.log('didnt fucking sign out')
          });
          
    }

    render() {
        var context = this;
        console.log('Props in App render ', this.props)
        return (
            <div>
                <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
                <button type="button" onClick={this.handleClick.bind(this)} >Click to Logout </button>

                {(this.props.isAuth ? (
                <div>
                    <div>Hello... {context.props.name}</div>
                    <img src={context.props.photo} width="10%" height="10%"/>
                    <div>{context.props.email}</div> 


<Router>
    <div>
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <span className="navbar-brand">Good Traders</span>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active"><Link to ='/'>Home</Link></li>
        <li className='nav-item'><Link to='/add'>Add Item</Link></li>
        <li className='nav-item'><Link to='/list'>All Items </Link></li>
    </ul>
  </div>
  </nav>
  <Route exact path="/" render={(props) => ( <Home {...props} items={this.props.items} getItems={this.props.getItems}/>)} />
                            <Route exact path="/add" component={AddItem} />
                        </div>
                    </Router>
                </div>) :
                    <Login auth={this.props.toggleAuth.bind(this)}/>)}
            </div>
        )
    }
}

export default App;