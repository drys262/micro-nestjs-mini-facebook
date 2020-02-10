import { Document } from 'mongoose';

export interface User {
	id: string;
	userId: string;
	displayName: string;
	email: string;
}

export type UserModel = Document & User;
