import { IsEmail } from 'class-validator';
import {
  CreateUserInput as ICreateUserInput,
  PersonalDetailsInput,
} from '../graphql.schema';

export class CreateUserInput implements ICreateUserInput {
  firstName: string;
  age: number;
  companyId: string;
  positionId: string;
  friendIds: string[];
  personalDetails: PersonalDetailsInput;
}
