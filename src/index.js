import React from 'react'
import { render } from 'react-dom'

import store from './store/config'
import App from './App'


render(
  <App store={store} />,
  document.getElementById('root')
)
