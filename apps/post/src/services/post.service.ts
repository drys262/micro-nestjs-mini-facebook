import { Injectable, Inject } from '@nestjs/common';
import { RpcException, ClientProxy } from '@nestjs/microservices';
import {
	CreatePostDto,
	UpdatePostDto,
	PostModel,
	USER_SERVICE,
	getUserPattern,
	getUsersByFirebaseIdPattern,
} from '@app/shared';
import { PostRepository } from '../repository/post.repository';
import { UserType } from 'apps/api/src/modules/user/types/user.type';

@Injectable()
export class PostService {
	constructor(
		private readonly postRepository: PostRepository,
		@Inject(USER_SERVICE) private readonly userClient: ClientProxy,
	) {}

	async getAllPost(): Promise<PostModel[]> {
		return this.postRepository.findAll();
	}

	async getPostById(id: string): Promise<PostModel> {
		const post = await this.postRepository.findPostById(id);
		if (!post) {
			throw new RpcException({
				resource: 'Post',
				message: `Post ID ${id} not found.`,
			});
		}
		return post;
	}

	async createPost(createPostDto: CreatePostDto): Promise<boolean> {
		const user = await this.userClient
			.send<Promise<UserType>, string>(
				getUsersByFirebaseIdPattern,
				createPostDto.userId,
			)
			.toPromise();
		if (!user) {
			throw new RpcException({
				resource: 'User',
				message: `Firebase User ID ${createPostDto.userId} not found.`,
			});
		}
		return this.postRepository.create({ ...createPostDto });
	}

	async updatePost(updatePostDto: UpdatePostDto): Promise<boolean> {
		return this.postRepository.update({ ...updatePostDto });
	}

	async deletePost(id: string): Promise<boolean> {
		return this.postRepository.delete(id);
	}
}
