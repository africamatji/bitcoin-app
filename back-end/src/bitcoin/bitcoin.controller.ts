import {Controller, Get, Param} from '@nestjs/common';
import { BitCoinService } from './bitcoin.service';

@Controller('bitcoin')
export class BitCoinController {
  constructor(private readonly bitcoinService: BitCoinService) {}

  @Get('exchange')
  getPriceUSD(): object {
    return this.bitcoinService.getPriceUSD()
  }

  @Get('exchange/:currency')
  getPriceCurrency(@Param('currency') currency: string): object {
    return this.bitcoinService.getPriceCurrency(currency)
  }
}
