import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { ChatGateway } from './gateways/chat.gateway';
import { AlertGateway } from './gateways/alert.gateway';
import { AlertController } from './controllers/alert/alert.controller';
import ClientModules from './library/clients.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './resolvers/user/user.resolver';

@Module({
	imports: [
		ClientModules,
		GraphQLModule.forRoot({
			debug: true,
			playground: true,
			autoSchemaFile: 'schema.gql',
		}),
	],
	controllers: [UserController, AlertController],
	providers: [ChatGateway, AlertGateway, UserResolver],
})
export class AppModule {}
