import {IEntity} from './entity'

export interface IUser extends IEntity {
  gender: 'MAN' | 'WOMAN';
  created_at: Date;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address?: IAddress;
  has_been_claimed: boolean;
  avatar_url: string;
  career: string;
  sector: string;
  birthday: Date;
  birth_place: string;
  linkedin_url: string;
  bio: string;
  status: UserStatus;
  does_pay_taxes: boolean;
  allow_mail_notifications: boolean;
  is_investor: boolean;
  is_entrepreneur: boolean;
  is_partner: boolean;
}

export enum UserStatus {
  VALIDATED = 'VALIDATED',
  INIT = 'INIT',
  WAITING = 'WAITING',
}

export interface IAddress {
  number: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  fiscalCountry: string;
}
