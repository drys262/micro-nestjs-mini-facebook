import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { POST_SERVICE, postServiceOptions } from '@app/shared';
import { PostResolver } from './resolvers/post.resolver';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: POST_SERVICE,
				transport: Transport.TCP,
				options: {
					host: postServiceOptions.options.host,
					port: postServiceOptions.options.port,
				},
			},
		]),
	],
	controllers: [],
	providers: [PostResolver],
})
export class PostModule {}
