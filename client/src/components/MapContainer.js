import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {MAP_KEY} from '../../../database/config';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {mapCoords} from '../actions/mapCoords';

const style = {
    width: '100%',
    display: 'flex',
    height: '400px'
  
}
const mapWrapper = {
    display: 'inline-flex'
}


export class MapContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = { 
            lat: 0,
            lng: 0,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: { item: null }
        }
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                selectedPlace: { item: null }
            })
        }
    }
    
    reRender(lat, lng) {
        this.setState({lat: lat, lng: lng});
    }

    render () {
        return (
            <div style={mapWrapper}>
            <button type="button" onClick={() => {this.props.mapCoords((Math.random() * 3 + 32),(Math.random() * 3 - 120), this.reRender.bind(this))} }>Click to Add Marker</button>
            <Map google={this.props.google} onClick={this.onMapClicked.bind(this)} style={style} initialCenter={{
                lat: 34.0522,
                lng: -118.2437
              }} zoom={15}>
                {this.props.items.map((item, index) => 
                    <Marker onClick={this.onMarkerClick.bind(this)} position={ { lat: item.owner_lat, lng:item.owner_lng } } item={ item } key={index} />
                )}
        
                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} >
                    <div>
                        {(this.state.selectedPlace.item === null) ? null :
                        <div>
                            <img src={this.state.selectedPlace.item.image_url} alt="Selected Item" />
                            <h1>{this.state.selectedPlace.item.item_name}</h1>
                        </div>
                        }
                    </div>
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export default (GoogleApiWrapper({
    apiKey: (MAP_KEY)
})(MapContainer))