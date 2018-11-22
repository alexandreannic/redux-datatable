import {Criteria} from '../../../../src/type/criteria'

export interface UserCriteria extends Criteria {
  globalSearch?: string
  firstName?: string
  lastName?: string
  email?: string
  validated?: boolean
  scoreMin?: number
  scoreMax?: number
}
