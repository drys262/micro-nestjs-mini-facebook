import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EventModel } from '@app/shared/models/event.model';
import { Model } from 'mongoose';
import { CreateEventDto } from '@app/shared';

@Injectable()
export default class EventRepository {
	private readonly logger = new Logger('EventRepository');

	constructor(
		@InjectModel('Event') private readonly eventModel: Model<EventModel>,
	) {}

	async create(createEventDto: CreateEventDto): Promise<boolean> {
		this.logger.log('Create Event here');
		this.logger.log(createEventDto);
		await this.eventModel.create({ ...createEventDto });
		return true;
	}
}
