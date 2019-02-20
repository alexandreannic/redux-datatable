import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {IUser} from '../type/user'
import {datatableReducer} from '@alexandreannic/redux-datatable'
import {SIMPLE_DATATABLE} from '../../example/SimpleDatatable/SimpleDatatable'
import {TOOLBAR_DATATABLE} from '../../example/ToolbarDatatable/ToolbarDatatable'
import {EXPENDABLE_DATATABLE} from '../../example/ExpendableDatatable/ExpendableDatatable'
import {CUSTOM_DATATABLE} from '../../example/CustomDatatable/CustomDatatable'

export const store = createStore(
  combineReducers({
    paginate: combineReducers({
      [SIMPLE_DATATABLE]: datatableReducer<IUser>(SIMPLE_DATATABLE),
      [TOOLBAR_DATATABLE]: datatableReducer<IUser>(TOOLBAR_DATATABLE),
      [EXPENDABLE_DATATABLE]: datatableReducer<IUser>(EXPENDABLE_DATATABLE),
      [CUSTOM_DATATABLE]: datatableReducer<IUser>(CUSTOM_DATATABLE),
    }),
  }),
  compose(
    applyMiddleware(thunk)
    // Redux DevToops Chrome plugins
    , (<any> window).__REDUX_DEVTOOLS_EXTENSION__ && (<any> window).__REDUX_DEVTOOLS_EXTENSION__()
  )
)
