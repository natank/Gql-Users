import { Injectable } from '@nestjs/common';

import { User } from '../models/user.model';
import { Company } from '../models/company.model';
import { Position } from '../models/position.model';

import { UsersRepository, CompaniesRepository } from '../repositories';
import { UserEntity } from '../repositories/users.repository';
import { CreateUserInput } from 'src/graphql.schema';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository) {}

  async findOneById(id: string): Promise<UserEntity> {
    return this.usersRepo.findOneById(id);
  }

  async findUsers(props?): Promise<UserEntity[]> {
    const users = await this.usersRepo.findUsers(props);
    return users;
  }

  async findPositionById(id: string): Promise<Position> {
    const position = this.usersRepo.findPositionById(id);

    return position;
  }

  async findUserFriends(
    friendIds: string[],
  ): Promise<(User & { companyId: string; positionId: string })[]> {
    const friends = await this.usersRepo.findUserFriends(friendIds);
    return friends;
  }

  async createUser(user: CreateUserInput) {
    const newUser = await this.usersRepo.createUser(user);
    return newUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await this.usersRepo.deleteUser(id);
    return result;
  }

  async updateUser(id: string, user: CreateUserInput) {
    const updatedUser = await this.usersRepo.updateUser(id, user);
    return updatedUser;
  }
}
