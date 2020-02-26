import { Controller, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {
	createPostPattern,
	updatePostPattern,
	deletePostPattern,
	CreatePostDto,
	UpdatePostDto,
	getAllPostPattern,
	PostModel,
	getPostByIdPattern,
} from '@app/shared';
import { PostService } from '../../services/post.service';

@Controller('post')
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
