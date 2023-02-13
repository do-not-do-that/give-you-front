import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import loginStepReducer from './Store/LoginStep';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  loginStep: loginStepReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: _persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: customizedMiddleware,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
