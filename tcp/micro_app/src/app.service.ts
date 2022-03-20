import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  

  accumulate(data: number[]): number {

    return (data || []).reduce((x, y) => Number(x) + Number(y))
  }
}
