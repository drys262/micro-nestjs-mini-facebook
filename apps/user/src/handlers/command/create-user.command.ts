import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateUserCommand, CreateUserEventType } from '../../types';
import { UserService } from '../../services/user/user.service';

@CommandHandler(CreateUserCommand)
export default class CreateUserHandler
	implements ICommandHandler<CreateUserCommand> {
	constructor(
		private readonly userService: UserService,
		private readonly eventBus: EventBus,
	) {}
	async execute(command: CreateUserCommand): Promise<any> {
		console.log('CREATE USER COMMAND HERE');
		console.log(command.event);
		this.eventBus.publish(new CreateUserEventType(command.event));
	}
}
