import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { AppGateway } from './gateways/app.gateway';
import { ChatGateway } from './gateways/chat.gateway';
import { AlertGateway } from './gateways/alert.gateway';
import { AlertController } from './controllers/alert/alert.controller';
import ClientModules from './library/clients.module';

@Module({
  imports: [ClientModules],
  controllers: [UserController, AlertController],
  providers: [AppGateway, ChatGateway, AlertGateway],
})
export class AppModule {}
