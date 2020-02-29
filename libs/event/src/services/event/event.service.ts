import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '@app/shared';
import EventRepository from '@app/event/repository/event.repository';

@Injectable()
export class EventService {
	constructor(private readonly eventRepository: EventRepository) {}
	async emitEvent(createEventDto: CreateEventDto): Promise<boolean> {
		// TODO: store event to event store & emit/publish an event
		return this.eventRepository.create({ ...createEventDto });
	}
}
