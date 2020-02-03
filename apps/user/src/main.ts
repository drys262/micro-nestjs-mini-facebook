import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { userServiceOptions } from '@app/shared';

async function bootstrap() {
  const logger = new Logger('UserService');
  const app = await NestFactory.createMicroservice(
    AppModule,
    userServiceOptions,
  );
  app.listen(() => logger.log('User Service is listening...'));
}
bootstrap();
