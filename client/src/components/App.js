import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../components/ItemList';
import MapContainer from './MapContainer';
import Login from './Login';
import Home from './Home.js';
import AddItem from './AddItem.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const $ = require('jquery');
import axios from 'axios';

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
        var context=this;
        return (
            <div>
                <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
                {(this.props.isAuth ? (
                <div>
                    <div>Hello... {context.props.name}</div>
                    <img src={context.props.photo} width="30%" height="30%"/>
                    <div>{context.props.email}</div> 
                    <h1>Navigation Bar </h1>
                    <Router>
                        <div>
                        <ul>
                            <li><Link to ='/'>Home</Link></li>
                            <li><Link to ='/map'>Map</Link></li>
                            <li><Link to='/add'>Add Item</Link></li>
                            <li><Link to='/list'>All Items </Link></li>
                        </ul>
                        <div>
                        <Route exact path="/" render={(props) => (
                            <Home {...props} items={this.props.items} />
                        )} />
                        <Route path='/map' component={MapContainer} />
                        <Route exact path="/add" component={AddItem} />
                        <Route path="/list" component={ItemList} />
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





// class App extends React.Component {
    
//         render() {
//             console.log('this props ', this.props)
//             return (
//                 <div>
//                     <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
//                     {(this.props.isAuth ? (<div>
//                         <NavBar />
//                         <ItemList />
//                         <div>
//                         <MapContainer />
//                         </div>
//                         </div>) :
//                    <Login auth={this.props.toggleAuth.bind(this)}/>)
//                     }
//                 </div>
//             )
//         }
//     }
    
//     export default App;