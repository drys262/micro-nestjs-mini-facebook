import {
	Resolver,
	Query,
	Args,
	Mutation,
	ResolveProperty,
	Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import {
	USER_SERVICE,
	getUsersPattern,
	createUserPattern,
	getUserPattern,
	updateUserPattern,
	deleteUserPattern,
	User,
	POST_SERVICE,
	getPostByUserIdPattern,
} from '@app/shared';
import { ClientProxy } from '@nestjs/microservices';
import { ID } from 'type-graphql';
import { UserType } from '../types/user.type';
import { CreateUserInput } from '../inputs/create-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';
import { PostType } from '../../post/types/post.type';

@Resolver(of => UserType)
export class UserResolver {
	constructor(
		@Inject(USER_SERVICE) private readonly client: ClientProxy,
		@Inject(POST_SERVICE) private readonly postClient: ClientProxy,
	) {}

	@Query(() => [UserType])
	async users() {
		return this.client.send<Promise<UserType[]>>(getUsersPattern, {});
	}

	@Query(() => UserType)
	async user(@Args({ name: 'id', type: () => ID }) id: string) {
		return this.client.send<Promise<UserType>, string>(getUserPattern, id);
	}

	@Mutation(() => Boolean)
	async createUser(@Args('input') input: CreateUserInput) {
		return this.client.send<Promise<boolean>, CreateUserInput>(
			createUserPattern,
			input,
		);
	}

	@Mutation(() => Boolean)
	async updateUser(@Args('input') input: UpdateUserInput) {
		return this.client.send<Promise<boolean>, UpdateUserInput>(
			updateUserPattern,
			input,
		);
	}

	@Mutation(() => Boolean)
	async deleteUser(@Args({ name: 'id', type: () => ID }) id: string) {
		return this.client.send<Promise<boolean>, string>(deleteUserPattern, id);
	}

	@ResolveProperty()
	async posts(@Parent() user: User) {
		const { id } = user;
		return this.postClient.send<Promise<PostType[]>, string>(
			getPostByUserIdPattern,
			id,
		);
	}
}
