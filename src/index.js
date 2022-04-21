import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import './assets/css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-loading-skeleton/dist/skeleton.css'
import reduxStore from './redux/store';

const { store } = reduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
