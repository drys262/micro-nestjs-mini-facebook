import {
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  USER_SERVICE,
  createUserPattern,
  UserModel,
  getUsersPattern,
  getUserPattern,
  updateUserPattern,
  deleteUserPattern,
} from '@app/shared';
import { Observable } from 'rxjs';
import { CreateUserDto, UpdateUserDto } from '@app/shared/dto';

@Controller('user')
export class UserController {
  private readonly logger = new Logger('UserController');
  constructor(@Inject(USER_SERVICE) private readonly client: ClientProxy) {}

  @Get()
  getUsers(): Observable<Promise<UserModel[]>> {
    return this.client.send<Promise<UserModel[]>>(getUsersPattern, {});
  }

  @Get(':id')
  getUser(@Param('id') id: string): Observable<Promise<UserModel>> {
    return this.client.send<Promise<UserModel>, string>(getUserPattern, id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Observable<boolean> {
    return this.client.send<boolean, CreateUserDto>(
      createUserPattern,
      createUserDto,
    );
  }

  @Patch()
  updateUser(@Body() updateUserDto: UpdateUserDto): Observable<boolean> {
    return this.client.send<boolean, UpdateUserDto>(
      updateUserPattern,
      updateUserDto,
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Observable<boolean> {
    return this.client.send<boolean, string>(deleteUserPattern, id);
  }
}
