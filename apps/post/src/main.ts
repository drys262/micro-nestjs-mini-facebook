import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { postServiceOptions } from '@app/shared';
import { AppModule } from './app.module';

async function bootstrap() {
	const logger = new Logger('PostService');
	const app = await NestFactory.createMicroservice(
		AppModule,
		postServiceOptions,
	);
	app.listen(() => logger.log('Post Service is listening...'));
}
bootstrap();
