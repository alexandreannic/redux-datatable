import {IEntity} from './entity'

export interface IUser extends IEntity {
  gender?: UserGender
  createdAt: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  avatar?: string
  validated?: boolean
  score: number
  nationality?: string
}

export enum UserGender {
  MAN = 'Man',
  WOMAN = 'Woman',
}
