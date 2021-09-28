import { ResolveField, Parent, Resolver } from '@nestjs/graphql';
import { PersonalDetails } from 'src/graphql.schema';
@Resolver('PersonalDetails')
export class AddressResolver {
  @ResolveField('address')
  async getPersonalDetails(@Parent() personalDetails: PersonalDetails) {
    const { address } = personalDetails;
    return address;
  }
}
