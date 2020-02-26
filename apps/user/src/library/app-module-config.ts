import { ModuleMetadata } from '@nestjs/common/interfaces';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../services/user/user.service';
import { UserRepository } from '../repository/user.repository';
import mongooseConnection from './mongoose.connection';
import { UserController } from '../controllers/user/user.controller';

export default {
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/mf-user-service', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			autoIndex: true,
		}),
		mongooseConnection,
	],
	controllers: [UserController],
	providers: [UserService, UserRepository],
} as ModuleMetadata;
