import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class UpdatePostInput {
	@Field(() => ID)
	id: string;

	@Field()
	description: string;
}
