import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import { reducer } from "./store/reducer";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore({ reducer })}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
