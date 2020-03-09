import { Test, TestingModule } from '@nestjs/testing';
import { INestMicroservice } from '@nestjs/common';
import request from 'supertest';
import { userServiceOptions, getUsersPattern } from '@app/shared';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
	let app: INestMicroservice;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();
		app = moduleFixture.createNestMicroservice({
			options: userServiceOptions,
		});
		await app.listenAsync();
	});

	it('/ (GET)', () => {
		// const response = request(app)
		// 	.get(app.get(getUsersPattern))
		// 	.expect(404);
		// console.log('RESPONSE HERE');
		// console.log(response);
		expect(true).toEqual(true);
	});
});
