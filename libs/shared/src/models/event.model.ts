import { Document } from 'mongoose';

export interface Event {
	id: string;
	type: string;
	dateTimeCreated: Date;
	body: object;
}

export type EventModel = Document & Event;
