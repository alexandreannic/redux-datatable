import {PAGINATE_} from '@alexandreannic/redux-datatable'
import {getUserFromApi} from '../api/userApi'
import {UserCriteria} from '../type/userCriteria'

export const fetchUsers = (datatableName: string) => (criteria?: UserCriteria,) => dispatch => {
  const USERS_ = PAGINATE_(datatableName)
  dispatch({type: USERS_.REQUEST})
  getUserFromApi(criteria)
    .then(data => dispatch({type: USERS_.SUCCESS, data}))
    .catch(error => dispatch({type: USERS_.FAILURE, error}))
}
