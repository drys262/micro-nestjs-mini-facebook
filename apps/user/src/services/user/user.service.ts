import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@app/shared/dto';
import { UserModel } from '@app/shared';
import { RpcException } from '@nestjs/microservices';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async getUsers(): Promise<UserModel[]> {
		return this.userRepository.findAll();
	}

	async getUser(id: string): Promise<UserModel> {
		const user = await this.userRepository.findUserById(id);
		if (!user) {
			throw new RpcException({
				resource: 'User',
				message: `Firebase User ID ${id} not found.`,
			});
		}
		return user;
	}

	async createUser(createUserDto: CreateUserDto): Promise<boolean> {
		return this.userRepository.create({ ...createUserDto });
	}

	async updateUser(updateUserDto: UpdateUserDto): Promise<boolean> {
		return this.userRepository.update({ ...updateUserDto });
	}

	async deleteUser(id: string): Promise<boolean> {
		return this.userRepository.delete(id);
	}
}
