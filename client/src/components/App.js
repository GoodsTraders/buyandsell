import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';
import MapContainer from './MapContainer';
import NavBar from './NavBar';
import Login from './Login'

class App extends React.Component {

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.props.toggleAuth(!this.props.isAuth)} >Click to Toggle Auth </button>
                {(this.props.isAuth ? (<div>
                    <NavBar />
                    <ItemList />
                    <div>
                    <MapContainer />
                    </div>
                    </div>) :
                <Login />)
                }
            </div>
        )
    }
}

export default App;