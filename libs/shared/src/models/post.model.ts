import { Document } from 'mongoose';

export interface Post {
	id: string;
	userId: string;
	description: string;
}

export type PostModel = Document & Post;
