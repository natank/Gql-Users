import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from '../models/user.model';

import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../inputs';
import { Serialize } from '../interceptors/serialize.interceptor';
@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query('user')
  async user(@Args('id') id: string): Promise<User> {
    const result = await this.usersService.findOneById(id);
    return result;
  }
  @Query('users')
  async users(): Promise<User[]> {
    const result = await this.usersService.findUsers();
    return result;
  }

  @Mutation('createUser')
  @Serialize(CreateUserInput)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const newUser = await this.usersService.createUser(createUserInput);
    return newUser;
  }

  @Mutation('updateUser')
  async updateUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Args('id') id: string,
  ): Promise<User> {
    const updatedUser = await this.usersService.updateUser(id, createUserInput);
    return updatedUser;
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    const result = await this.usersService.deleteUser(id);
    return result;
  }
}
