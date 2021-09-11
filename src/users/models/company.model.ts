import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Company {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
