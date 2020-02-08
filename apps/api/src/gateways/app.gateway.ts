import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AppGateway');

  @WebSocketServer() wss: Server;

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconneted: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  // @SubscribeMessage('messageToServer')
  // handleMessage(client: Socket, payload: string): WsResponse<string> {
  //   return {
  //     event: 'messageToClient',
  //     data: payload,
  //   };
  // }
  @SubscribeMessage('messageToServer')
  handleMessage(client: Socket, payload: string): void {
    this.wss.emit('messageToClient', payload);
  }
}
