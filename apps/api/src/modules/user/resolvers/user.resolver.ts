import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import {
	USER_SERVICE,
	getUsersPattern,
	createUserPattern,
	getUserPattern,
	updateUserPattern,
	deleteUserPattern,
} from '@app/shared';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../types/user.type';
import { CreateUserInput } from '../inputs/user.input';
import { UpdateUserInput } from '../inputs/update-user.input';
import { ID } from 'type-graphql';

@Resolver(of => User)
export class UserResolver {
	constructor(@Inject(USER_SERVICE) private readonly client: ClientProxy) {}

	@Query(() => [User])
	async users() {
		return this.client.send<Promise<User[]>>(getUsersPattern, {});
	}

	@Query(() => User)
	async user(@Args({ name: 'id', type: () => ID }) id: string) {
		return this.client.send<Promise<User>, string>(getUserPattern, id);
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
}
