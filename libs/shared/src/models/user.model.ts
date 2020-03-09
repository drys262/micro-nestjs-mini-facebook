import { Document } from 'mongoose';

export interface User {
	id: string;
	displayName: string;
	email: string;
}

export type UserModel = Document & User;
