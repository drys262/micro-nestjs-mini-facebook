import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseSchema from '@app/event/library/mongoose.schema';
import EventRepository from '@app/event/repository/event.repository';
import { EventService } from './event.service';

describe('EventService', () => {
	let service: EventService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
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
		}).compile();

		service = module.get<EventService>(EventService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
