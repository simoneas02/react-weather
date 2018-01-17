import { combineReducers } from 'redux';

import WeatherReduce from './WeatherReduce'


const rootReducer = combineReducers({
  weather : WeatherReduce
});

export default rootReducer;