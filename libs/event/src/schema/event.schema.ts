import { v1 } from 'uuid';
import * as mongoose from 'mongoose';
import { toJSON } from '@app/shared';

export default new mongoose.Schema(
	{
		_id: {
			type: String,
			default: () => v1(),
		},
		type: { type: String, required: true },
		dateTimeCreated: { type: Date, required: true },
		body: { type: Object, required: true },
	},
	{
		_id: false,
		toJSON,
	},
);
