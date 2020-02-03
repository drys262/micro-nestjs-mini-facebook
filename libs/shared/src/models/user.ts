import { Document } from 'mongoose';

export type UserModel = Document & {
  userId: string;
  displayName: string;
  email: string;
};
