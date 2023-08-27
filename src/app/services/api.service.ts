import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  currencies: ICurrency[] = [];
  constructor(private http: HttpClient) { }


  getPortfolio() {
    let myPortfolio = localStorage.getItem('myPortfolioRates') ? JSON.parse(localStorage.getItem('myPortfolioRates') || '') : [];
    return myPortfolio;
  }

  updatePortfolio(currency: ICurrency) {
    let myPortfolio = this.getPortfolio();
    if (currency.selected) {
      myPortfolio.push(currency);
    } else {
      myPortfolio = myPortfolio.filter((c: ICurrency) => c.currencyCode != currency.currencyCode);
    }
    localStorage.setItem('myPortfolioRates', JSON.stringify(myPortfolio));
  }



  getCurrencies():Observable<ICurrency[]> {
    return this.http.get('https://api.currencyfreaks.com/v2.0/supported-currencies').pipe(map((res: any) => {
      return Object.values(res.supportedCurrenciesMap).filter((v:any) => v.countryCode != 'Crypto') as ICurrency[]
    }));
  }
}
