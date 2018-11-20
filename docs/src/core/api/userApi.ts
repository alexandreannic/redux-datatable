import {UserCriteria} from '../type/userCriteria'
import {OrderByType} from '../../../../src/type/criteria'
import {users} from './data/user'
import {IPagination} from '../../../../src/type/paginated'
import {IUser} from '../type/user'
import {compose} from 'redux'

export const getUserFromApi = (c?: UserCriteria): Promise<IPagination<IUser>> => {
  return new Promise((resolve) => setTimeout(() => resolve(getUsers(c)), 220))
}

const getUsers = (c?: UserCriteria): IPagination<IUser> => {
  return {
    total_size: users.length,
    data: c ? compose(
      paginate<IUser>(c.limit, c.offset),
      sort<IUser>(c.sortBy, c.orderBy),
      globalSearchFilter<IUser>(c.global_search),
      userFilter(c),
    )(users) : users
  }
}

const globalSearchFilter = <T>(global_search?: string) => (data: T[]): T[] => {
  if (!global_search) return data
  return data.filter(d => Object.values(d).join('').toLowerCase().indexOf(global_search.toLowerCase()) >= 0)
}

const paginate = <T>(limit: number, offset: number) => (data: T[]): T[] => {
  return data.slice(offset, offset + limit)
}

const userFilter = (c: UserCriteria) => (data: IUser[]): IUser[] => {
  const contains = (name: string) => (u: IUser): boolean => c[name] === undefined || c[name] === '' || u[name].toLowerCase().indexOf(c[name].toLowerCase()) === -1
  const equals = (name: string) => (u: IUser): boolean => c[name] === undefined || u[name].toLowerCase() !== c[name].toLowerCase()
  return data.filter(u =>
    equals('gender')(u) &&
    contains('firstName')(u) &&
    contains('lastName')(u) &&
    contains('phone')(u) &&
    contains('status')(u) &&
    (c.scoreMin === undefined || +c.scoreMin <= +u.score) &&
    (c.scoreMax === undefined || +c.scoreMax >= +u.score) &&
    (c.validated === undefined || u.validated === c.validated)
  )
}

const sort = <T>(sortBy?: string, orderBy?: OrderByType) => (data: T[]): T[] => {
  if (!sortBy || !orderBy) return data
  return data.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1) * (orderBy === 'asc' ? 1 : -1))
}
