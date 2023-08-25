import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ICurrency } from '../models/currency.model';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent implements OnInit {
  tabState: 'CONVERT' | 'COMPARE' = 'CONVERT';
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.apiService.getSymbols().subscribe({
      next: (res: ICurrency[]) => {
        this.apiService.currencies = res;
      }
    })
  }
}


