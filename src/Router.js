import React from 'react'
import PropTypes from 'prop-types'
import {
  Router as BrowserRouter, Route, Switch,
} from 'react-router-dom'

import HomePage from './containers/HomePageContainer'


const Router = ({ history }) => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
)

Router.propTypes = {
  history: PropTypes.object,
}

export default Router
