const libPath = 'redux-datatable'

export const actionCode = (fileName: string, constName: string): string => `
import {${constName}} from './${fileName}'
import {PAGINATE_} from '${libPath}'

const USERS_ = PAGINATE_(${constName})

export const fetchUsers => criteria => dispatch => {
  dispatch({type: USERS_.REQUEST})
  getUserFromApi(criteria)
    .then(data => dispatch({type: USERS_.SUCCESS, data}))
    .catch(error => dispatch({type: USERS_.FAILURE, error}))
}
`

export const storeCode = (fileName: string, constName: string): string => `
import {combineReducers, createStore} from 'redux'
import {${constName}} from './${fileName}'
import {datatableReducer} from '${libPath}'

export const store = createStore(
  combineReducers({
    // ...Other reducers
    paginate: combineReducers({
      [${constName}]: datatableReducer(${constName}),
    }),
  }),
)
`

export const parseComponentCode = (code: string): string => code
  .replace(/import \{fetchUsers\} from \'.*?\'/, 'import {fetchUsers} from \'./action.js\'')
  .replace(/fetchUsers\(.*?\)/, 'fetchUsers')
