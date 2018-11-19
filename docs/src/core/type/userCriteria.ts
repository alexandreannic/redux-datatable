import {Criteria} from '../../../../src/type/criteria'

export interface UserCriteria extends Criteria {
  global_search?: string
  firstName?: string
  lastName?: string
  email?: string
  validated?: boolean
  scoreMin?: number
  scoreMax?: number
}
