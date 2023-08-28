import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseAPI = 'https://graduationprojectbm.up.railway.app/api';
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
      myPortfolio = myPortfolio.filter((c: ICurrency) => c.code != currency.code);
    }
    localStorage.setItem('myPortfolioRates', JSON.stringify(myPortfolio));
  }



  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get(`${this.baseAPI}/v1/currency`).pipe(map((res: any) => {
      return Object.values(res.data) as ICurrency[]
    }));
  }
}
