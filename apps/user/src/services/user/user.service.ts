import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@app/shared/dto';
import { UserRepository } from '../../repository/user.repository';
import { UserModel } from '@app/shared';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<UserModel[]> {
    return this.userRepository.findAll();
  }

  async getUser(id: string): Promise<UserModel> {
    return this.userRepository.findUserById(id);
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
