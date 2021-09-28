import { Company as ICompany } from '../graphql.schema';
export class Company implements ICompany {
  id: string;
  name: string;
  description: string;
}
