import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import penderMiddleware from 'redux-pender';
import rootReducer from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter } from 'react-router-dom';

const middlewares = [penderMiddleware()];

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(...middlewares)),
)

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

