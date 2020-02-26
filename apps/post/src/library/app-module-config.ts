import { MongooseModule } from '@nestjs/mongoose';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import mongooseConnection from './mongoose.connection';
import { PostController } from '../controllers/post/post.controller';
import { PostService } from '../services/post.service';
import { PostRepository } from '../repository/post.repository';

export default {
	imports: [
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
