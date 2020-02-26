import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseConnection from 'apps/user/src/library/mongoose.connection';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/mf-post-service', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			autoIndex: true,
		}),
		mongooseConnection,
	],
	providers: [],
})
export class AppModule {}
