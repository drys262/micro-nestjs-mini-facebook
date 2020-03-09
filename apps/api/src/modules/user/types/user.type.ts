import { ObjectType, Field, ID } from 'type-graphql';
import { PostType } from '../../post/types/post.type';

@ObjectType()
export class UserType {
	@Field(() => ID)
	id: string;

	@Field()
	displayName: string;

	@Field()
	email: string;

	@Field(type => [PostType])
	posts: PostType[];
}
