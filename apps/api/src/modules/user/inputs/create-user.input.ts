import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class CreateUserInput {
	@Field(() => ID, { nullable: false })
	id: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
