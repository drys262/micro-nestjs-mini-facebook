import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { USER_SERVICE, userServiceOptions } from '@app/shared';
import mongooseConnection from './mongoose.connection';
import { PostController } from '../controllers/post/post.controller';
import { PostService } from '../services/post.service';
import { PostRepository } from '../repository/post.repository';

export default {
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
		MongooseModule.forRoot('mongodb://localhost:27017/mf-post-service', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			autoIndex: true,
		}),
		mongooseConnection,
	],
	controllers: [PostController],
	providers: [PostService, PostRepository],
} as ModuleMetadata;
