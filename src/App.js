import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import history from './History'
import Router from './Router'

import './App.scss'


const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history} />
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
