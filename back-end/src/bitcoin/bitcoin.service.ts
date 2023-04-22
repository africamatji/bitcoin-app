import {ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from 'axios'
import {map, catchError, Observable} from "rxjs";

@Injectable()
export class BitCoinService {
  constructor(private http: HttpService) {}

  getExchangeRateInCurrency(currency: string): object {
      const url = `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
      return this.makeHttpRequest(url)
  }

  private makeHttpRequest(url: string): Observable<any> {
      return this.http.get(url).pipe(
          map((response: AxiosResponse) => response.data.data),
          catchError((error) => {
              throw new ForbiddenException('API error')
          }),
      );
  }
}
