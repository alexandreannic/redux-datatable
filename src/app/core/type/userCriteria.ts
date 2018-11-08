import {Criteria} from '../../../lib/type/criteria'

export interface UserCriteria extends Criteria {
  global_search?: string
  first_name?: string
  last_name?: string
  email?: string
}
