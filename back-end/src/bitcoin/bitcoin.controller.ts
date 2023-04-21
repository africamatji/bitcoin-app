import {Controller, Get, Param} from '@nestjs/common';
import { BitCoinService } from './bitcoin.service';

@Controller('bitcoin')
export class BitCoinController {
  constructor(private readonly bitcoinService: BitCoinService) {}

  @Get('exchange')
  getDefaultExchangeRate(): object {
    return this.bitcoinService.getExchangeRateInCurrency('usd')
  }

  @Get('exchange/:currency')
  getExchangeRateInCurrency(@Param('currency') currency: string): object {
    return this.bitcoinService.getExchangeRateInCurrency(currency)
  }
}
