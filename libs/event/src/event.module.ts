import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EventService } from './services/event/event.service';
import mongooseSchema from './library/mongoose.schema';
import EventRepository from './repository/event.repository';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/mf-event-service', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
			autoIndex: true,
		}),
		mongooseSchema,
	],
	providers: [EventService, EventRepository],
	exports: [EventService],
})
export class EventModule {}
