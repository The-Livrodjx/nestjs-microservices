// import { Logger } from '@nestjs/common';
// import {ClientOptions, Transport, ClientProxyFactory} from '@nestjs/microservices'

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// const logger = new Logger('Main')

// const microserviceOptions: ClientOptions = {
//   transport: Transport.TCP,
//   options: {
//     host: '127.0.0.1',
//     port: 8877
//   }
// }

// const client = ClientProxyFactory.create(microserviceOptions)

// client
//   .send<number, number[]>('add', [1,2,3])
//   .subscribe(result => logger.log(result))

async function bootstrap() {

  const app = await NestFactory.create(AppModule)

  await app.listen(3000)
}

bootstrap()