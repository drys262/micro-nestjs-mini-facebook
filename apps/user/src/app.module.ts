import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import mongooseConnection from './library/mongoose.connection';
import { UserRepository } from './repository/user.repository';

@Module({
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
})
export class AppModule {}
