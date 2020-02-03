import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import ClientModules from './library/clients.module';

@Module({
  imports: [ClientModules],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
