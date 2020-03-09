/* eslint-disable max-classes-per-file */
import { CreateUserEvent } from '@app/event/types';

export class CreateUserCommand {
	constructor(public readonly event: CreateUserEvent) {}
}

export class CreateUserEventType {
	constructor(public readonly event: CreateUserEvent) {}
}
