import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class UpdateUserInput {
	@Field(() => ID)
	id: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
