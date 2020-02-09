import { Field, InputType } from 'type-graphql';

@InputType()
export class UpdateUserInput {
	@Field()
	id: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
