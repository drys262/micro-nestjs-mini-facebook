import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayDisconnect,
  OnGatewayConnection,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ namespace: '/alerts' })
export class AlertGateway
  implements OnGatewayDisconnect, OnGatewayConnection, OnGatewayInit {
  private logger: Logger = new Logger('AlertGateway');

  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconneted: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  sendToAll(message: string) {
    this.wss.emit('alertToClient', { type: 'Alert', message });
  }
}
