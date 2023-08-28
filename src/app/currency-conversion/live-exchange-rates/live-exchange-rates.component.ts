import { Component } from '@angular/core';
import { ICurrency } from 'src/app/models/currency.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'live-exchange-rates',
  templateUrl: './live-exchange-rates.component.html',
  styleUrls: ['./live-exchange-rates.component.scss']
})
export class LiveExchangeRatesComponent {
  currencies: ICurrency[] = [];
  portfolioCurrencies: ICurrency[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.getMyPortfolio();
    this.apiService.currencies.forEach(c => {
      this.portfolioCurrencies.forEach(el => {
        if (c.code === el.code) {
          c.selected = el.selected
        }
      })
    });
    this.currencies = this.apiService.currencies;
  }

  getMyPortfolio() {
    this.portfolioCurrencies = this.apiService.getPortfolio();
  }

  getSelectedCurrency(c: ICurrency) {
    this.apiService.updatePortfolio(c);
    this.getMyPortfolio();
  }

}
