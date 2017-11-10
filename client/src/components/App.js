import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../containers/itemList';
import MapContainer from './MapContainer';
import Login from './Login';
import Home from './Home.js';
import AddItem from './AddItem.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {

    render() {
        console.log('this props ', this.props)
        return (
            <div>
                <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
                {(this.props.isAuth ? (
                <div>
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
                        <Route exact path="/" component={Home} />
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