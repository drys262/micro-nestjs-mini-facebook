import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import appModuleConfig from '../../library/app-module-config';

describe('Post Controller', () => {
	let controller: PostController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule(
			appModuleConfig,
		).compile();

		controller = module.get<PostController>(PostController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
