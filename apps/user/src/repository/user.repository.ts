import { Injectable, Logger } from '@nestjs/common';
import { omit } from 'ramda';
import { UserModel, CreateUserDto, UpdateUserDto } from '@app/shared';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { ResourceNotFoundException } from '@app/shared/exceptions/resource.exception';
import { EventService } from '@app/event';
import { ADD_USER_EVENT } from '@app/event/constant';

@Injectable()
export class UserRepository {
	private readonly logger = new Logger('UserRepository');

	constructor(
		@InjectModel('User') private readonly userModel: Model<UserModel>,
		private readonly eventService: EventService,
	) {}

	async findAll(): Promise<UserModel[]> {
		return this.userModel.find();
	}

	async findUserById(id: string): Promise<UserModel> {
		const user = await this.userModel.findById(id);
		if (!user) {
			throw new ResourceNotFoundException('User', id);
		}
		return user;
	}

	async create(createUserDto: CreateUserDto): Promise<boolean> {
		await this.userModel.create({ _id: createUserDto.id, ...createUserDto });
		await this.eventService.emitEvent({
			type: ADD_USER_EVENT,
			dateTimeCreated: new Date(),
			body: { ...createUserDto },
		});
		return true;
	}

	async update(updateUserDto: UpdateUserDto): Promise<boolean> {
		await this.userModel.findByIdAndUpdate(updateUserDto.id, {
			...omit(['id'], updateUserDto),
		});
		return true;
	}

	async delete(id: string): Promise<boolean> {
		await this.userModel.findByIdAndDelete(id);
		return true;
	}
}
