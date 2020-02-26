import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto, PostModel } from '@app/shared';
import { PostRepository } from '../repository/post.repository';

@Injectable()
export class PostService {
	constructor(private readonly postRepository: PostRepository) {}

	async getAllPost(): Promise<PostModel[]> {
		return this.postRepository.findAll();
	}

	async getPostById(id: string): Promise<PostModel> {
		return this.postRepository.findPostById(id);
	}

	async createPost(createPostDto: CreatePostDto): Promise<boolean> {
		return this.postRepository.create({ ...createPostDto });
	}

	async updatePost(updatePostDto: UpdatePostDto): Promise<boolean> {
		return this.postRepository.update({ ...updatePostDto });
	}

	async deletePost(id: string): Promise<boolean> {
		return this.postRepository.delete(id);
	}
}
