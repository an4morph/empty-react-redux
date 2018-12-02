import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import some from './reducers/some'

const logger = createLogger({
  collapsed: true,
})

const rootReducer = combineReducers({
  some
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

export default store
