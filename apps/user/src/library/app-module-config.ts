import { ModuleMetadata } from '@nestjs/common/interfaces';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from '@app/event';
import { UserService } from '../services/user/user.service';
import { UserRepository } from '../repository/user.repository';
import mongooseSchema from './mongoose.schema';
import { UserController } from '../controllers/user/user.controller';

export default {
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/mf-user-service', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			autoIndex: true,
		}),
		mongooseSchema,
		EventModule,
	],
	controllers: [UserController],
	providers: [UserService, UserRepository],
} as ModuleMetadata;
