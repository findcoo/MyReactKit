import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import { Provider } from 'react-redux';
import mainStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = mainStore();

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(wrapper, document.getElementById('root'));
registerServiceWorker();
