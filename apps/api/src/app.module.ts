import { Module } from '@nestjs/common';
import ClientModules from './library/clients.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AlertModule } from './modules/alert/alert.module';
import { ChatModule } from './modules/chat/chat.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [
		/* Application Modules */
		AlertModule,
		ChatModule,
		PostModule,
		UserModule,

		/* Third Party Modules */
		GraphQLModule.forRoot({
			debug: true,
			playground: true,
			autoSchemaFile: 'schema.gql',
		}),
	],
})
export class AppModule {}
