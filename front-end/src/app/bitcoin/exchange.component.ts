import { Component } from "@angular/core";
import {BitCoinExchangeService} from "./exchange.service";
import {BitcoinExchange} from "./BitcoinExchange";

@Component({
  selector: 'bitcoin-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})

export class BitCoinExchangeComponent {
  currencyAmount = 1;
  bitCoinExchangeRate = 0;
  bitCoinAmount = 0;

  constructor(private readonly bitCoinExchangeService: BitCoinExchangeService) {
    bitCoinExchangeService.getExchangeRateInCurrency().subscribe(
      ((response: BitcoinExchange) => {
        this.bitCoinExchangeRate = Number(response.rates['BTC'])
        this.bitCoinAmount = this.bitCoinExchangeRate
      })
    )
  }

  getExchangeRateInCurrency(event: any) {
    const currencyAmount = event.target.value
    this.currencyAmount = currencyAmount
    this.bitCoinAmount = currencyAmount * this.bitCoinExchangeRate
  }
}
