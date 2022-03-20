import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {

  private logger = new Logger("AppController")

  constructor(private readonly appService: AppService) {}

  // @Post("/add")
  @MessagePattern('add')
  async accumulate(data: number[]) {

    this.logger.log("Adding: " + data.toString())
    return this.appService.accumulate(data)
  }
}
