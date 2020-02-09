import { Module } from '@nestjs/common';
import { ChatGateway } from './gateways/chat.gateway';

@Module({
	imports: [],
	controllers: [],
	providers: [ChatGateway],
})
export class ChatModule {}
