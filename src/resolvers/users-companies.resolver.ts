import { CompaniesService } from '../services';
import { ResolveField, Parent, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';

@Resolver('User')
export class UserCompanyResolver {
  constructor(private companiesService: CompaniesService) {}

  @ResolveField('company')
  async getCompany(@Parent() user: User & { companyId: string }) {
    const { companyId } = user;
    const result = await this.companiesService.findOneById(companyId);
    return result;
  }
}
