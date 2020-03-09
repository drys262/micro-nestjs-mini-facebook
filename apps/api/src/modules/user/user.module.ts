import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
	USER_SERVICE,
	userServiceOptions,
	POST_SERVICE,
	postServiceOptions,
} from '@app/shared';
import { UserResolver } from './resolvers/user.resolver';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: USER_SERVICE,
				transport: Transport.TCP,
				options: {
					host: userServiceOptions.options.host,
					port: userServiceOptions.options.port,
				},
			},
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
	providers: [UserResolver],
})
export class UserModule {}
