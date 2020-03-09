import { CreateEventDto, CreateUserDto } from '@app/shared';

export type CreateUserEvent = Omit<CreateEventDto, 'body'> & {
	body: CreateUserDto;
};
