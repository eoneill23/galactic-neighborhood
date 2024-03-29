import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
