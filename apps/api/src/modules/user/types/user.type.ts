import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class User {
	@Field()
	userId: string;

	@Field()
	displayName: string;

	@Field()
	email: string;
}
