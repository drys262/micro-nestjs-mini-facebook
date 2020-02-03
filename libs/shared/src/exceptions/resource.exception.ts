import { HttpException, HttpStatus } from '@nestjs/common';

export class ResourceException extends HttpException {
  constructor(resource: string) {
    super(`${resource} not found.`, HttpStatus.NOT_FOUND);
  }
}
