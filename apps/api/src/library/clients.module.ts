import { ClientsModule, Transport } from '@nestjs/microservices';
import { userServiceOptions, USER_SERVICE } from '@app/shared';

export default ClientsModule.register([
  {
    name: USER_SERVICE,
    transport: Transport.TCP,
    options: {
      host: userServiceOptions.options.host,
      port: userServiceOptions.options.port,
    },
  },
]);
