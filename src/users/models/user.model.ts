import { IUserModel } from '../Interfaces/user.model.interface';

import { Field, Int, ID, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';
import { Position } from './position.model';

@ObjectType()
export class User implements IUserModel {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field((type) => Int)
  age: number;

  @Field((type) => Company)
  company: Company;

  @Field((type) => Position)
  position: Position;

  @Field((type) => [User])
  friends: [User?];
}
