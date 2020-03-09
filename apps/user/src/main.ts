import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { userServiceOptions } from '@app/shared';
import { AppModule } from './app.module';
import listenForEvents from './listener';

async function bootstrap() {
	const logger = new Logger('UserService');
	const app = await NestFactory.createMicroservice(
		AppModule,
		userServiceOptions,
	);
	await app.listenAsync();
	await logger.log('User service is starting...');
}
bootstrap();
