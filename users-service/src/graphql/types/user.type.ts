import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(_ => ID)
  id: string;

  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field()
  createdAt: string;
}
