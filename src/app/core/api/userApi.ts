import {UserCriteria} from '../type/userCriteria'
import {OrderByType} from '../../../lib/type/criteria'
import {users} from './data/user'
import {IPagination} from '../../../lib/type/paginated'
import {IUser} from '../type/user'
import {compose} from 'redux'


export const userApi = (c: UserCriteria): IPagination<IUser> => {
  return {
    total_size: users.length,
    data: compose(
      globalSearchFilter<IUser>(c.global_search),
      userFilter(c),
      paginate<IUser>(c.limit, c.offset),
      sortedData<IUser>(c.sort_by, c.order_by),
    )(users)
  }
}

const globalSearchFilter = <T>(global_search?: string) => (data: T[]) => {
  if (global_search) return data.filter(d => Object.values(d).join('').toLowerCase().indexOf(global_search.toLowerCase()) >= 0)
  return data
}

const paginate = <T>(limit: number, offset: number) => (data: T[]) => {
  return data.slice(offset, offset + limit)
}

const userFilter = (c: UserCriteria) => (data: IUser[]): IUser[] => {
  return data.filter(u => {
    if (!(c.first_name && u.first_name.indexOf(c.first_name) !== -1
      || c.last_name && u.last_name.indexOf(c.last_name) !== -1)
    ) return u
  })
}

const sortedData = <T>(sortBy: string, orderBy: OrderByType) => (data: T[]): T[] => {
  console.log('sort', sortBy, orderBy)
  return data.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1) * (orderBy === 'asc' ? 1 : -1))
}
