import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class PostType {
	@Field(() => ID, { nullable: true })
	id: string;

	@Field({ nullable: true })
	userId: string;

	@Field({ nullable: true })
	description: string;
}
