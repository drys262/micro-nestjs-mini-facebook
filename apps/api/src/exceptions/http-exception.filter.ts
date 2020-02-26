import { Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
	catch(exception: HttpException, host: GqlArgumentsHost) {
		return exception;
	}
}
