import { Document } from 'mongoose';

export type User = {
	id: string;
	userId: string;
	displayName: string;
	email: string;
};

export type UserModel = Document & User;
