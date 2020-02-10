import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UserType {
	@Field(() => ID)
	id: string;

	@Field()
	userId: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
