import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
