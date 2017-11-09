import React from 'react';
// import Routes from '../routers/router.js';
import AddItem from './AddItem.js';
import ItemList from './ItemList.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <h1>Navigation Bar </h1>
            <Router>
                <div>
                <ul>
                    <li><Link to='/add'>Add Item</Link></li>
                    <li><Link to='/list'>All Items </Link></li>
                </ul>
                <div>
                <Route exact path="/add" component={AddItem} />
                <Route path="/list" component={ItemList} />
                </div>
                </div>
            </Router>
        </div>
    )
}

export default NavBar;