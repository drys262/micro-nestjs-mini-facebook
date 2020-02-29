import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import appModuleConfig from '../../library/app-module-config';

describe('UserService', () => {
	let service: UserService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule(
			appModuleConfig,
		).compile();

		service = module.get<UserService>(UserService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
