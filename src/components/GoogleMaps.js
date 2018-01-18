import React, { Component } from 'react';

/*
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return(
    <GoogleMapLoader 
      containerElement={ <div style={{ height: '100%' }}/>}
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat,  lng: props.lon }} />}
    />
  )
}
*/
class GoogleMaps extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom   : 12,
      center : {
        lat : this.props.lat,
        lng : this.props.lon
      }
    })
  }

  render() {
    return <div ref='map'/>;
  }
}

export default GoogleMaps;