import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList.js';
import Map from './Map.js';
import NavBar from './NavBar.js';
import Login from './Login.js'

class App extends React.Component {

    componentDidMount() {
        console.log("IS AUTHENTICATED?", this.props);
    }

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
                {(this.props.isAuth ? (<div>
                    <NavBar />
                    <Map />
                    <ItemList /> 
                    </div>) :
                <Login />)
                }
            </div>
        )
    }
}

export default App;