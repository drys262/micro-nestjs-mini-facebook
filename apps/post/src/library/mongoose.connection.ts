import { MongooseModule } from '@nestjs/mongoose';
import postSchema from '../schema/post.schema';

export default MongooseModule.forFeature([
	{ name: 'Post', schema: postSchema },
]);
