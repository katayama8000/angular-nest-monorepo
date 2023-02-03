import { Controller, Get, Header } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Header('Access-Control-Allow-Origin', 'http://localhost:4200')
  @Get()
  getData() {
    return this.appService.getData();
  }
}
