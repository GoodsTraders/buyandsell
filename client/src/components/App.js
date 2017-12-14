import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../components/ItemList';
import Home from './Home.js';
import AddItem from './AddItem.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Login from '../containers/login';
import Profile from '../components/Profile'
import Privacy from '../components/Privacy'
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {fetchItems} from '../../../utils/fetchItems'
const firebase = require('firebase');

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems: [],
            displayedItems: [],
            oneItem: [],
            clicked: false
        }
        this.selectItem = this.selectItem.bind(this);
        this.clickedHome = this.clickedHome.bind(this);
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this.fetch()
    }

    fetch() {
        console.log("fetching...");
        var context = this;
        fetchItems((data) => {
            context.props.getItems(data);
            this.setState({
                allItems: data,
                displayedItems: data
            })
        });
    }

    handleClick(){
        var context = this;
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            context.props.toggleAuth(!context.props.isAuth);
            //ßthis.props.toggleAuth(!this.props.isAuth)
          }).catch(function(error) {
            // An error happened.
          });
          
    }

    clickedHome() {
        this.setState({
            clicked: false,
            displayedItems: this.state.allItems
        })
    }

    selectItem (item) {
        this.setState({
          clicked: true,
          displayedItems: item
        }) 
      }

    render() {
        var context = this;
        return (
            <div>
                {/* <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button> */}
                {/* <button type="button" onClick={this.handleClick.bind(this)} >Click to Logout </button> */}

                {(this.props.isAuth  ? (
                <div>
<Router>
    <div>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <span className="navbar-brand">Good Traders</span>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" onClick={this.clickedHome}><Link to ='/'>Home</Link></li>
        <li className='nav-item'><Link to='/add'>Add Item</Link></li>
        <li className='nav-item'><Link to='/profile'>My Profile </Link></li>
        <li className='nav-item'><button type="button" className='logout-btn' onClick={this.handleClick.bind(this)} >Logout</button>
</li>
    </ul>
  </div>
  </nav>
                <Route exact path="/" render={(props) => ( <Home {...props} items={this.state.displayedItems} fetch={this.fetch} getItems={this.props.getItems} email={this.props.email} clicked={this.state.clicked} selectItem={this.selectItem} /> )} />
        <Route exact path="/add" render={(props) => ( <AddItem {...props} email={this.props.email} fetch={this.fetch}/> )} />
        <Route exact path="/profile" render={(props) => ( <Profile {...props} items={this.props.items} getItems={this.props.getItems} name={this.props.name} photo={this.props.photo} email={this.props.email}/>)} />
        <Route path ="/privacypolicy" exact component= { Privacy } />
                    </div>
                    </Router>
                </div>) :
                    <Login auth={this.props.toggleAuth.bind(this)}/>)}
            </div>
        )
    }
}

export default App;