import { IsEmail } from 'class-validator';
import {
  PersonalDetailsInput as IPersonalDetailsInput,
  AddressInput as IAddressInput,
} from '../graphql.schema';

export class PersonalDetailsInput implements IPersonalDetailsInput {
  gender: string;
  status: string;
  address: IAddressInput;
}
