import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { ID } from 'type-graphql';
import {
	POST_SERVICE,
	getAllPostPattern,
	getPostByIdPattern,
	createPostPattern,
	updatePostPattern,
	deletePostPattern,
	ResourceNotFoundException,
} from '@app/shared';
import { throwError } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { PostType } from '../types/post.type';
import { CreatePostInput } from '../inputs/create-post.input';
import { UpdatePostInput } from '../inputs/update-post.input';
import { HttpExceptionFilter } from '../../../exceptions/http-exception.filter';

@Resolver(of => PostType)
@UseFilters(HttpExceptionFilter)
export class PostResolver {
	constructor(@Inject(POST_SERVICE) private readonly client: ClientProxy) {}

	@Query(() => [PostType])
	async posts() {
		return this.client.send<Promise<PostType[]>>(getAllPostPattern, {});
	}

	@Query(() => PostType)
	async post(@Args({ name: 'id', type: () => ID }) id: string) {
		try {
			const post = await this.client
				.send<Promise<PostType>, string>(getPostByIdPattern, id)
				.toPromise();
			return post;
		} catch (error) {
			throw new ResourceNotFoundException('Post', id);
		}
	}

	@Mutation(() => Boolean)
	async createPost(@Args('input') input: CreatePostInput) {
		try {
			await this.client
				.send<Promise<boolean>, CreatePostInput>(createPostPattern, input)
				.toPromise();
		} catch (error) {
			throw new ResourceNotFoundException('User', input.userId);
		}
		return true;
	}

	@Mutation(() => Boolean)
	async updatePost(@Args('input') input: UpdatePostInput) {
		return this.client.send<Promise<boolean>, UpdatePostInput>(
			updatePostPattern,
			input,
		);
	}

	@Mutation(() => Boolean)
	async deletePost(@Args({ name: 'id', type: () => ID }) id: string) {
		return this.client.send<Promise<boolean>, string>(deletePostPattern, id);
	}
}
