import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE, userServiceOptions } from '@app/shared';

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
		]),
	],
	controllers: [],
	providers: [UserResolver],
})
export class UserModule {}
