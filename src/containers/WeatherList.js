import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';

class WeatherList extends Component {

  renderWeather(cityData) {

    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    
    return( 
      <li key={ cityData.city.id}>
        <div>{ cityData.city.name }</div>
        <Chart data={temps} color='blue' units='K'/>
        <Chart data={pressures} color='red' units='hPa' />
        <Chart data={humidities} color='pink' units='%' />
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
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);