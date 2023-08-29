import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICompare, ICompareRes, IConvert, IConvertRes, ICurrency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseAPI = 'https://graduationprojectbm.up.railway.app/api';
  currencies: ICurrency[] = [];

  makeHeaders() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set("Content-Type", "application/json");
    return headers
  }
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

  setNewPortfolio(data: ICurrency[]){
    localStorage.setItem('myPortfolioRates', JSON.stringify(data));
  }

  convert(data: IConvert) {
    return this.http.get(`${this.baseAPI}/v1/currency/conversion?from=${data.from}&to1=${data.to}&amount=${data.amount}`, { headers: this.makeHeaders() }).pipe(map((res: any) => {
      return res.data as IConvertRes
    }));
  }

  compare(data: ICompare) {
    return this.http.get(`${this.baseAPI}/v1/currency/conversion?from=${data.from}&to1=${data.to1}&amount=${data.amount}&to2=${data.to2}`, { headers: this.makeHeaders() }).pipe(map((res: any) => {
      return res.data as ICompareRes
    }));
  }

  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get(`${this.baseAPI}/v1/currency`, { headers: this.makeHeaders() }).pipe(map((res: any) => {
      return Object.values(res.data) as ICurrency[]
    }));
  }
}
