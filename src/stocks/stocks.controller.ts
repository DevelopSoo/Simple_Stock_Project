import { Controller, Get, Render } from '@nestjs/common';

@Controller('stocks')
export class StocksController {
  @Get()
  @Render('index.hbs')
  getTop10() {
    return { message: 'h' };
  }
}
