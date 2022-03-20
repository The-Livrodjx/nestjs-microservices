import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  private client: ClientProxy

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 8877
      }
    })
  }
  public accumulate(data: number[]) {

    return this.client
      .send<number, number[]>('add', data)
  
  }
}
