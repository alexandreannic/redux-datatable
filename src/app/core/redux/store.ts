import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

export const store = createStore(
  combineReducers({
  }),
  compose(
    applyMiddleware(thunk)
    // Redux DevToops Chrome plugins
    // , (<any> window).__REDUX_DEVTOOLS_EXTENSION__ && (<any> window).__REDUX_DEVTOOLS_EXTENSION__()
  )
)
