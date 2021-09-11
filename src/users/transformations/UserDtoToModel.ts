import { IUserModel } from '../Interfaces/user.model.interface';
import { IUserDto } from '../Interfaces/user.dto.interface';

import { Company } from '../models/company.model';
import { Position } from '../models/position.model';

export class UserDtoToModel implements IUserDto, IUserModel {
  id: string;

  firstName: string;

  age: number;

  companyId: string;

  positionId: string;

  friendIds: [string?];

  company: Company;

  position: Position;

  friends: [IUserModel?];
}
