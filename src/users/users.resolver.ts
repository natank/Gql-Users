import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { plainToClass } from 'class-transformer';

import { User as UserDto } from './dtos/user.dto';
import { Company as CompanyDto } from './dtos/company.dto';
import { Position as PositionDto } from './dtos/position.dto';

import { User } from './models/user.model';
import { Company } from './models/company.model';
import { Position } from './models/position.model';

import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User, { name: 'user' })
  async getUser(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDto> {
    const result = await this.usersService.findOneById(id);
    return result;
  }

  @ResolveField('company', (returns) => Company)
  async getCompany(@Parent() user: UserDto) {
    const { companyId } = user;
    const result = await this.usersService.findCompanyById(companyId);
    return result;
  }

  @ResolveField('position', (returns) => Position)
  async getPosition(@Parent() user: UserDto) {
    const { positionId } = user;
    const result = await this.usersService.findPositionById(positionId);
    return result;
  }

  @ResolveField()
  async friends(@Parent() user: UserDto) {
    const friends = this.usersService.findUserFriends(user.id);

    return friends;
  }
}
