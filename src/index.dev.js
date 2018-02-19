import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import mainStore from './store'
import DevTools from './containers/DevTools'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

let store = mainStore()

const wrapper = (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'))
registerServiceWorker()
