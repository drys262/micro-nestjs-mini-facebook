import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import appModuleConfig from '../../library/app-module-config';

describe('User Controller', () => {
	let controller: UserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule(
			appModuleConfig,
		).compile();

		controller = module.get<UserController>(UserController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
