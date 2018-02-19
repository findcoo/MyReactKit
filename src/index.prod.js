import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  databaseURL: 'https://{FIREBASE_PROJECT_NAME}.firebaseio.com',
}

ReactDOM.render(
  <App config={config} />,
  document.getElementById('root')
)
registerServiceWorker();
