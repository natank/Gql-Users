import { UsersService } from '../services/users.service';
import { ResolveField, Parent, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
@Resolver('User')
export class UserFriendsResolver {
  constructor(private usersService: UsersService) {}
  @ResolveField('friends')
  async friends(@Parent() user: User & { friendIds: string[] }) {
    const friends = await this.usersService.findUserFriends(user.friendIds);

    return friends;
  }
}
