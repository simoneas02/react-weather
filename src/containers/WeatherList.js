import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    return( 
      <li key={ cityData.city.id}>
        { cityData.city.name }
      </li>
    );
  };

  render() {
    return(
      <div>
        <h2>City</h2>
        <ul>
          { this.props.weather.map(this.renderWeather)  }
        </ul>
      </div>
    )
  }

}

function mapStateToProps({ weather }) {
  console.log(weather)
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);