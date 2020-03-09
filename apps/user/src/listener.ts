import { PusherClient, EVENT_CHANNEL, ADD_USER_EVENT } from '@app/event';
import { Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserEvent } from '@app/event/types';
import { CreateUserCommand } from './types';

const logger = new Logger('Listener');

export default class EventListener {
	constructor(private readonly commandBus: CommandBus) {
		this.start();
	}

	start() {
		const channel = PusherClient.subscribe(EVENT_CHANNEL);
		channel.bind(ADD_USER_EVENT, (data: CreateUserEvent) =>
			this.commandBus.execute(new CreateUserCommand(data)),
		);
	}
}
