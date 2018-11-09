import {IEntity} from './entity'

export interface IUser extends IEntity {
  gender?: UserGender
  createdAt: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  avatar?: string
  status?: UserStatus
  score?: number
  nationality?: string
}

export enum UserGender {
  MAN = 'Man',
  WOMAN = 'Woman',
}

export enum UserStatus {
  VALIDATED = 'Validated',
  BLOCKED = 'Blocked',
  WAITING = 'Waiting',
}
// const UserStatus = {
//   VALIDATED : 'Validated',
//   BLOCKED : 'Blocked',
//   WAITING : 'Waiting',
// }
