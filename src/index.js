import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers/index';

const rootElement = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App />
  </Provider>
  , rootElement
);