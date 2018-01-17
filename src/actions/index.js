import axios from 'axios'

const API_KEY   = '2ca4024b8f5fc3eb9abb215ae5df96f1';
const ROOT_URL  = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url     = `${ROOT_URL}&q=${city},null`;
  const request = axios.get(url)
                  .then(response => response)
                  .catch(error => console.log(error));
  
  return{
    type    : FETCH_WEATHER,
    payload : request
  }

}