import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Position {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;
}
