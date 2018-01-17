import { combineReducers } from 'redux';

import WeatherReduce from './WeatherReduce'


const rootReducer = combineReducers({
  whather : WeatherReduce
});

export default rootReducer;