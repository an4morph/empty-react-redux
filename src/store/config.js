import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// import some from './reducers/some'

const rootReducer = combineReducers({
  // some
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
