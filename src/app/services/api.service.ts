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

  getSymbols():Observable<any> {
    return this.http.get('https://api.currencyfreaks.com/v2.0/supported-currencies').pipe(map((res: any) => {
      return Object.values(res.supportedCurrenciesMap).filter(v => v)
    }));
  }
}
