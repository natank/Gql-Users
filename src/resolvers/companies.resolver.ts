import { Args, Query, Resolver } from '@nestjs/graphql';

import { Company } from '../models/company.model';

import { CompaniesService } from '../services/';
@Resolver('Company')
export class CompaniesResolver {
  constructor(private companiesService: CompaniesService) {}

  @Query('company')
  async getCompany(@Args('id') id: string): Promise<Company> {
    const result = await this.companiesService.findOneById(id);
    return result;
  }
  @Query('companies')
  async getCompanies(): Promise<Company[]> {
    const result = await this.companiesService.find();
    return result;
  }
}
