import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '@app/shared';
import EventRepository from '@app/event/repository/event.repository';
import { ADD_USER_EVENT, EVENT_CHANNEL } from '@app/event';
import pusher from '../../library/pusher';

@Injectable()
export class EventService {
	constructor(private readonly eventRepository: EventRepository) {}
	async emitEvent(createEventDto: CreateEventDto): Promise<boolean> {
		// TODO: store event to event store & emit/publish an event
		pusher.trigger(EVENT_CHANNEL, createEventDto.type, { ...createEventDto });
		return this.eventRepository.create({ ...createEventDto });
	}
}
