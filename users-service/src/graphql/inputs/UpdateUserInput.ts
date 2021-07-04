import { Field, InputType } from "type-graphql";
import { NewUserInput } from "./NewUserInput";

@InputType()
export class UpdateUserInput implements Partial<NewUserInput> {
	@Field({ nullable: true })
  fullName?: string;
	
	@Field({ nullable: true })
  email?: string;

	@Field({ nullable: true })
  password?: string;
}