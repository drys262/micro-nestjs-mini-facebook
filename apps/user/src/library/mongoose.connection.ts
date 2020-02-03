import { MongooseModule } from '@nestjs/mongoose';
import userSchema from '../schema/user.schema';

export default MongooseModule.forFeature([
  { name: 'User', schema: userSchema },
]);
