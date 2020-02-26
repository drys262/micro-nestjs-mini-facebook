import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../../repository/user.repository';
import mongooseConnection from '../../library/mongoose.connection';
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
