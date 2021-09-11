import { Company } from './company.dto';
import { Position } from './position.dto';
import { IUserDto } from '../Interfaces/user.dto.interface';

export class User implements IUserDto {
  id: string;

  firstName: string;

  age: number;

  companyId: string;

  positionId: string;

  friendIds: [string?];
}
