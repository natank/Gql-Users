import { ResolveField, Parent, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
@Resolver('User')
export class PersonalDetailsResolver {
  @ResolveField('personalDetails')
  async getPersonalDetails(@Parent() user: User) {
    const { personalDetails } = user;
    return personalDetails;
  }
}
