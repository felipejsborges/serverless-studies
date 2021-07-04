import { Field, InputType } from "type-graphql";
import { User } from "../types/user.type";

@InputType()
export class NewUserInput implements Omit<User, 'id' | 'createdAt'> {
	@Field()
  fullName: string;
	
	@Field()
  email: string;

	@Field()
  password: string;
}
