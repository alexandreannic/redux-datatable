import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {IUser} from '../type/user'
import {USERS} from './userAction'
import datatableReducer from '../../../lib/Datatable/redux/datatableReducer'

export const store = createStore(
  combineReducers({
    paginate: combineReducers({
      users: datatableReducer<IUser>(USERS),
    }),
  }),
  compose(
    applyMiddleware(thunk)
    // Redux DevToops Chrome plugins
    // , (<any> window).__REDUX_DEVTOOLS_EXTENSION__ && (<any> window).__REDUX_DEVTOOLS_EXTENSION__()
  )
)
