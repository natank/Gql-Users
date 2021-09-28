import { UsersService } from '../services';
import { ResolveField, Parent, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
@Resolver('User')
export class UserPositionResolver {
  constructor(private usersService: UsersService) {}
  @ResolveField('position')
  async getPosition(@Parent() user: User & { positionId: string }) {
    const { positionId } = user;
    const result = await this.usersService.findPositionById(positionId);
    return result;
  }
}
