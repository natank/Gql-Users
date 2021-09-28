import { CreateUserInput as ICreateUserInput } from '../graphql.schema';

export class CreateUserInput implements ICreateUserInput {
  firstName: string;
  age: number;
  companyId: string;
  positionId: string;
  friendIds: string[];
}
