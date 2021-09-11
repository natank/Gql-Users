import { Injectable } from '@nestjs/common';
import { User as UserDto } from './dtos/user.dto';
import { Company as CompanyDto } from './dtos/company.dto';
import { Position as PositionDto } from './dtos/position.dto';

import { User as UserModel } from './models/user.model';
import { Company as CompanyModel } from './models/company.model';
import { Position as PositionModel } from './models/position.model';

import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository) {}
  async findOneById(id: string): Promise<UserDto> {
    return this.usersRepo.findOneById(id);
  }

  async findCompanyById(id: string): Promise<CompanyDto> {
    const company = this.usersRepo.findCompanyById(id);
    return company;
  }

  async findPositionById(id: string): Promise<PositionDto> {
    const position = this.usersRepo.findPositionById(id);

    return position;
  }

  async findUserFriends(userId: string): Promise<UserDto[]> {
    const friends = this.usersRepo.findUserFriends(userId);
    return friends;
  }
}
