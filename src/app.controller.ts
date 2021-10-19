import { Controller, Get } from '@nestjs/common';
import { execute } from './shared/functions/shell.function';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  async getHello() {
    return await execute('python main.py');
  }
}
