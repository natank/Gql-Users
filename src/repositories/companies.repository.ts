import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { Company } from '../models/company.model';
import { Position } from '../models/position.model';
import axios from 'axios';

@Injectable()
export class CompaniesRepository {
  async findOneById(id: string): Promise<Company> {
    const company = await axios.get(`http://localhost:3000/companies/${id}`);
    return company.data;
  }

  async find(): Promise<Company[]> {
    const companies = await axios.get(`http://localhost:3000/companies`);
    return companies.data;
  }
}
