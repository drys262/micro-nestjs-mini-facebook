import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
	@Field(() => ID)
	id: string;

	@Field()
	userId: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
