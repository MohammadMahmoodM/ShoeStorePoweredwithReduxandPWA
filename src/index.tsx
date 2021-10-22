import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import { App } from './components';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
