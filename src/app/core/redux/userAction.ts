import {_PAGINATE, RootState} from '../../../lib/Datatable/redux/datatableAction'
import {IPagination} from '../../../lib/type/paginated'
import {IUser} from '../type/user'
import {userApi} from '../api/userApi'
import {UserCriteria} from '../type/userCriteria'


export const fetchUsers = (datatableName: string) => (criteria?: UserCriteria,) => (dispatch, getState: () => RootState): Promise<IPagination<IUser>> => {
  const _USERS = _PAGINATE(datatableName)
  dispatch({type: _USERS.REQUEST})
  return new Promise((resolve) => {
    const data: IPagination<IUser> = userApi(criteria)
    setTimeout(() => {
      dispatch({type: _USERS.SUCCESS, data})
    }, 400)
    resolve(data)
  })
}
