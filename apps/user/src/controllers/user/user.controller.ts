import { Controller, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {
	createUserPattern,
	getUsersPattern,
	UserModel,
	getUserPattern,
	updateUserPattern,
	deleteUserPattern,
} from '@app/shared';
import { CreateUserDto, UpdateUserDto } from '@app/shared/dto';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

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
		return this.userService.createUser({ ...createUserDto });
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
