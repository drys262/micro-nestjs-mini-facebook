import * as mongoose from 'mongoose';
import generateId from '@app/shared/library/generate-id';
import { toJSON, ResourceType } from '@app/shared';

const postSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			default: () => generateId(ResourceType.Post),
		},
		userId: { type: String, required: true },
		description: { type: String, required: true },
	},
	{
		_id: false,
		toJSON,
	},
);

postSchema.index({ userId: 1 });

export default postSchema;
