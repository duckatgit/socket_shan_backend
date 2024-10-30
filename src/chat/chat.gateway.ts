import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);

    // Start sending random integers to the connected client
    this.sendRandomIntegers(client);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  sendRandomIntegers(client: Socket) {
    setInterval(() => {
      const randomInteger = Math.floor(Math.random() * 101);
      client.emit('randomInteger', randomInteger);
    }, 0.5);
  }
}
