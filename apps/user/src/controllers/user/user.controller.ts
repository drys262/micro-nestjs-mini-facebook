import { Controller, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {
	createUserPattern,
	getUsersPattern,
	UserModel,
	getUserPattern,
	updateUserPattern,
	deleteUserPattern,
	getUsersByFirebaseIdPattern,
} from '@app/shared';
import { EventService, ADD_USER_EVENT } from '@app/event';
import { CreateUserDto, UpdateUserDto } from '@app/shared/dto';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly eventService: EventService,
	) {}

	@MessagePattern(getUsersPattern)
	getUsers(): Promise<UserModel[]> {
		return this.userService.getUsers();
	}

	@MessagePattern(getUserPattern)
	getUser(id: string): Promise<UserModel> {
		return this.userService.getUser(id);
	}

	@MessagePattern(createUserPattern)
	async createUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
		this.eventService.emitEvent({
			body: { ...createUserDto },
			dateTimeCreated: new Date(),
			type: ADD_USER_EVENT,
		});
		return true;
	}

	@MessagePattern(updateUserPattern)
	async updateUser(@Body() updateUserDto: UpdateUserDto): Promise<boolean> {
		return this.userService.updateUser({ ...updateUserDto });
	}

	@MessagePattern(deleteUserPattern)
	async deleteUser(id: string): Promise<boolean> {
		return this.userService.deleteUser(id);
	}
}
