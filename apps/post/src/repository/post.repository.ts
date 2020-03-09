import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { omit } from 'ramda';
import { Model } from 'mongoose';
import { PostModel, CreatePostDto, UpdatePostDto } from '@app/shared';

@Injectable()
export class PostRepository {
	private readonly logger = new Logger('PostRepository');

	constructor(
		@InjectModel('Post') private readonly postModel: Model<PostModel>,
	) {}

	async findAll(): Promise<PostModel[]> {
		return this.postModel.find();
	}

	async findPostByUserId(userId: string): Promise<PostModel[]> {
		return this.postModel.find({
			userId,
		});
	}

	async findPostById(id: string): Promise<PostModel> {
		return this.postModel.findById(id);
	}

	async create(createPostDto: CreatePostDto): Promise<boolean> {
		await this.postModel.create({ ...createPostDto });
		return true;
	}

	async update(updatePostDto: UpdatePostDto): Promise<boolean> {
		await this.postModel.findByIdAndUpdate(updatePostDto.id, {
			...omit(['id'], updatePostDto),
		});
		return true;
	}

	async delete(id: string): Promise<boolean> {
		await this.postModel.findByIdAndDelete(id);
		return true;
	}
}
