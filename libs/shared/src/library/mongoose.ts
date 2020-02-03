import * as mongoose from 'mongoose';

export const toJSON = {
  transform(doc: {}, ret: mongoose.Document) {
    /* eslint-disable */
    ret.id = ret._id;

    delete ret._id;
    delete ret.__v;
    delete (ret as any).cursor;
    /* eslint-enable */
  },
  virtuals: true,
};
