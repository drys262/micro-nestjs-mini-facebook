import { Injectable, Logger } from '@nestjs/common';
import { omit } from 'ramda';
import { UserModel } from '@app/shared';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from '@app/shared';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceException } from '@app/shared/exceptions/resource.exception';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger('UserRepository');
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  async findAll(): Promise<UserModel[]> {
    return this.userModel.find();
  }

  async findUserById(id: string): Promise<UserModel> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new ResourceException('User');
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<boolean> {
    await this.userModel.create({ ...createUserDto });
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
