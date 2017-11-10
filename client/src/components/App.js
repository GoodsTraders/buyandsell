import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../components/ItemList';
import Home from './Home.js';
import AddItem from './AddItem.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Login from '../containers/login';


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

    render() {
        var context = this;
        return (
            <div>
                <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
                {(this.props.isAuth ? (
                <div>
                    <Router>
                        <div>
                        <ul>
                            <li><Link to ='/'>Home</Link></li>
                            <li><Link to='/add'>Add Item</Link></li>
                            <li><Link to='/list'>All Items </Link></li>
                        </ul>
                        <div>
                        <Route exact path="/" render={(props) => (
                            <Home {...props} items={this.props.items} getItems={this.props.getItems}/>
                        )} />
                        <Route exact path="/add" component={AddItem} />
                        <Route path="/list" render={(props) => (
                            <ItemList {...props} items={this.props.items}/>
                        )} />
                        </div>
                        </div>
                    </Router>
                </div>) :
               <Login auth={this.props.toggleAuth.bind(this)}/>)
                }
            </div>
        )
    }
}

export default App;