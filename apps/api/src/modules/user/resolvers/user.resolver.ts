import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
	@Query(() => String)
	async getUser() {
		return 'user here';
	}
}
