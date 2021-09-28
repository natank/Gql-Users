import { IUser, PersonalDetails } from '../graphql.schema';
import { Company } from './company.model';
import { Position } from './position.model';

export class User implements IUser {
  id: string;

  firstName: string;

  age: number;

  company: Company;

  position: Position;

  friends: User[];

  personalDetails: PersonalDetails;
}
