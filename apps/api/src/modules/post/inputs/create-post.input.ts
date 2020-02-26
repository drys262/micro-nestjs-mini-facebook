import { InputType, Field } from 'type-graphql';

@InputType()
export class CreatePostInput {
	@Field()
	userId: string;

	@Field()
	description: string;
}
