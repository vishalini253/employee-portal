import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import App from './App'
import { store } from '../src/views/store'
import * as serviceWorker from './serviceWorker';
import './style.css'


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();