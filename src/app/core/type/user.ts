import {IEntity} from './entity'

export interface IUser extends IEntity {
  gender?: 'MAN' | 'WOMAN'
  created_at: string
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  address?: IAddress
  has_been_claimed: boolean
  avatar_url?: string
  career?: string
  sector?: string
  birthday?: string
  birth_place?: string
  linkedin_url?: string
  bio?: string
  status?: UserStatus
  does_pay_taxes?: boolean
  allow_mail_notifications?: boolean
  roles?: string
  investor_score?: number
  nationality?: string
}

export enum UserStatus {
  VALIDATED = 'VALIDATED',
  INIT = 'INIT',
  WAITING = 'WAITING',
}

export interface IAddress {
  number: string
  street: string
  zip: string
  city: string
  country: string
  fiscalCountry: string
}
