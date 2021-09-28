import { UsersService } from '../services';
import { ResolveField, Parent, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { Company } from '../models/company.model';

@Resolver('Company')
export class CompanyUserResolver {
  constructor(private usersService: UsersService) {}

  @ResolveField('workers')
  async getWorkers(@Parent() company: Company): Promise<User[]> {
    const { id } = company;
    const result = await this.usersService.findUsers({ companyId: id });
    return result;
  }
}
