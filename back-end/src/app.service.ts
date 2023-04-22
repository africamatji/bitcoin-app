import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Please note that front end is running on <a href="http://localhost:4200/">localhost:4200</a>';
  }
}
