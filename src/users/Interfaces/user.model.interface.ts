import { Company } from '../models/company.model';
import { Position } from '../models/position.model';

export interface IUserModel {
  id: string;

  firstName: string;

  age: number;

  company: Company;

  position: Position;

  friends: [IUserModel?];
}
