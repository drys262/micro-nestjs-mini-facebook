import { Controller, Body, Inject, UseFilters } from '@nestjs/common';
import {
	MessagePattern,
	ClientProxy,
	RpcException,
} from '@nestjs/microservices';
import {
	createPostPattern,
	updatePostPattern,
	deletePostPattern,
	CreatePostDto,
	UpdatePostDto,
	getAllPostPattern,
	PostModel,
	getPostByIdPattern,
	USER_SERVICE,
	UserModel,
	getUserPattern,
} from '@app/shared';
import { PostService } from '../../services/post.service';
import { ExceptionFilter } from '../../exceptions/rpc-exception.filter';

@Controller('post')
@UseFilters(ExceptionFilter)
export class PostController {
	constructor(private readonly postService: PostService) {}

	@MessagePattern(getAllPostPattern)
	async getAllPost(): Promise<PostModel[]> {
		return this.postService.getAllPost();
	}

	@MessagePattern(getPostByIdPattern)
	async getPostById(id: string): Promise<PostModel> {
		return this.postService.getPostById(id);
	}

	@MessagePattern(createPostPattern)
	async createPost(@Body() createPostDto: CreatePostDto): Promise<boolean> {
		return this.postService.createPost({ ...createPostDto });
	}

	@MessagePattern(updatePostPattern)
	async updatePost(@Body() updatePostDto: UpdatePostDto): Promise<boolean> {
		return this.postService.updatePost({ ...updatePostDto });
	}

	@MessagePattern(deletePostPattern)
	async deletePost(id: string): Promise<boolean> {
		return this.postService.deletePost(id);
	}
}
