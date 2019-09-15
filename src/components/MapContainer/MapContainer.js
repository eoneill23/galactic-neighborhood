import React, { Component } from 'react';
import { googleKey } from '../../keys';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  height: '270px',
  width: '300px'
};

export class MapContainer extends Component {
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.long }}
      >
        <Marker position={{ lat: this.props.lat, lng: this.props.long }} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleKey
})(MapContainer)