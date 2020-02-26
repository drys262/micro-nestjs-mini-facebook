import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
	@Field()
	userId: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
