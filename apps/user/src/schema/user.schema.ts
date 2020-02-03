import * as mongoose from 'mongoose';
import generateId from '@app/shared/library/generate-id';
import { toJSON } from '@app/shared';

export default new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => generateId('usr'),
    },
    userId: { type: String, required: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    _id: false,
    toJSON,
  },
);
