import { MicroserviceOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';
import { Transport } from '@nestjs/microservices';

export const userServiceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8000,
  },
};

export const postServiceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8001,
  },
};
