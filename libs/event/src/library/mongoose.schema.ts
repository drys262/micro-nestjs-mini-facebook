import { MongooseModule } from '@nestjs/mongoose';
import eventSchema from '../schema/event.schema';

export default MongooseModule.forFeature([
	{ name: 'Event', schema: eventSchema },
]);
