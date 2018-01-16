import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const rootElement = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<App />, rootElement);