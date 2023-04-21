import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {map, catchError, throwError, Observable} from "rxjs";
import { Injectable } from "@angular/core";
import {BitcoinExchange} from "./BitcoinExchange";

@Injectable()
export class BitCoinExchangeService {
  constructor(private readonly http: HttpClient) {}
  getPriceUSD (): Observable<BitcoinExchange> {
    const url = 'http://localhost:3000/bitcoin/exchange'
    return this.http.get<BitcoinExchange>(url).pipe(
      map((response: BitcoinExchange) => response),
      catchError((error: HttpErrorResponse) => {
        console.error('error', error)

        throw new Error('Error making API call')
      })
    )
  }
}
