import { Component } from "@angular/core";
import {BitCoinExchangeService} from "./exchange.service";
import {BitcoinExchange} from "./BitcoinExchange";
import {Observable} from "rxjs";

@Component({
  selector: 'bitcoin-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})

export class BitCoinExchangeComponent {
  bitcoinExchange: Observable<BitcoinExchange>

  constructor(private readonly bitCoinExchangeService: BitCoinExchangeService) {
    this.bitcoinExchange = bitCoinExchangeService.getPriceUSD()
  }
}
