import {Criteria} from '../../../lib/type/criteria'
import {_PAGINATE, RootState} from '../../../lib/Datatable/redux/datatableAction'
import {IPagination} from '../../../lib/type/paginated'
import {IUser} from '../type/user'

export const USERS = 'users'

const _USERS = _PAGINATE(USERS)

export const fetchUsers = (criteria?: Criteria,) => (dispatch, getState: () => RootState): Promise<IPagination<IUser>> => {
  dispatch({type: _USERS.REQUEST})
  return new Promise((resolve) => {
    const data: IPagination<IUser> = {total_size: 0, data: []}
    setTimeout(() => {
      dispatch({type: _USERS.SUCCESS, data})
    }, 400)
    resolve(data)
  })
}
