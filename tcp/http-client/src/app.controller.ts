import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {

    return this.appService.accumulate(data)
  }
}
