import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {IUser} from '../type/user'
import {SIMPLE_DATATABLE} from './userAction'
import datatableReducer from '../../../lib/Datatable/redux/datatableReducer'

export const store = createStore(
  combineReducers({
    paginate: combineReducers({
      [SIMPLE_DATATABLE]: datatableReducer<IUser>(SIMPLE_DATATABLE),
    }),
  }),
  compose(
    applyMiddleware(thunk)
    // Redux DevToops Chrome plugins
    // , (<any> window).__REDUX_DEVTOOLS_EXTENSION__ && (<any> window).__REDUX_DEVTOOLS_EXTENSION__()
  )
)
