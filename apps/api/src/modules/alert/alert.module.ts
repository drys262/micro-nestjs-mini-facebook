import { Module } from '@nestjs/common';
import { AlertController } from './controllers/alert.controller';
import { AlertGateway } from './gateways/alert.gateway';

@Module({
	imports: [],
	controllers: [AlertController],
	providers: [AlertGateway],
})
export class AlertModule {}
