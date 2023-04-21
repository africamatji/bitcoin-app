export interface BitcoinExchange {
  currency: string;
  rates: {
    [currencyCode: string]: string
  };
}
