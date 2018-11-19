import {_PAGINATE, RootState} from '../../../../src/Datatable/redux/datatableAction'
import {IPagination} from '../../../../src/type/paginated'
import {IUser} from '../type/user'
import {userApi} from '../api/userApi'
import {UserCriteria} from '../type/userCriteria'


export const fetchUsers = (datatableName: string) => (criteria?: UserCriteria,) => (dispatch, getState: () => RootState) => {
  const _USERS = _PAGINATE(datatableName)
  dispatch({type: _USERS.REQUEST})
  new Promise((resolve) => {
    const data: IPagination<IUser> = userApi(criteria)
    setTimeout(() => {
      dispatch({type: _USERS.SUCCESS, data})
    }, 240)
    resolve(data)
  })
}
