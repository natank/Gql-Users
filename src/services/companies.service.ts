import { Injectable } from '@nestjs/common';

import { Company } from '../models';

import { CompaniesRepository } from '../repositories';

@Injectable()
export class CompaniesService {
  constructor(private companiesRepo: CompaniesRepository) {}

  async findOneById(id: string): Promise<Company> {
    return this.companiesRepo.findOneById(id);
  }

  async find(): Promise<Company[]> {
    const companies = await this.companiesRepo.find();
    return companies;
  }
}
