import {Criteria} from '../../../lib/type/criteria'

export interface UserCriteria extends Criteria {
  global_search?: string
  firstName?: string
  lastName?: string
  email?: string
  has_been_claimed?: boolean
}
