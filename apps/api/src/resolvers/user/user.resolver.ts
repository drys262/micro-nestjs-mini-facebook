import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
	@Query('user')
	async getUser(@Args('id') id: number) {
		return 'user here';
	}
}
