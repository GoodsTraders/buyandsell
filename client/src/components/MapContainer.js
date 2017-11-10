import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {MAP_KEY} from '../../../database/config';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {mapCoords} from '../actions/mapCoords';

const style = {
    width: '75%',
    height: '75%'
}

export class MapContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = { lat: 0, lng: 0 }
    }
    
    reRender(lat, lng) {
        this.setState({lat: lat, lng: lng});
    }

    componentDidMount() {
        this.props.items.forEach((item) => {
            var lat = parseFloat(item.owner_lat);
            var lng = parseFloat(item.owner_lng);
            this.props.mapCoords(lat, lng, this.reRender.bind(this));
        })
    }

    render () {
        return (
            <div>
            <button type="button" onClick={() => {this.props.mapCoords((Math.random() * 3 + 32),(Math.random() * 3 - 120), this.reRender.bind(this))} }>Click to Add Marker</button>
            <Map google={this.props.google} style={style} initialCenter={{
                lat: 33.9760019,
                lng: -118.39089139999999
              }} zoom={15}>
                {this.props.coords.map((coord, index) => 
                    <Marker position={ coord } key={index} />
                )}
        
                {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Info?</h1>
                    </div>
                </InfoWindow> */}
            </Map>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        coords: state.mapReducer.coords
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({mapCoords: mapCoords}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GoogleApiWrapper({
    apiKey: (MAP_KEY)
})(MapContainer))