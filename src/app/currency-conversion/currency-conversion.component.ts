import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LiveExchangeRatesComponent } from './live-exchange-rates/live-exchange-rates.component';
import { ICompareRes, ICurrency } from '../models/currency.model';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent {
  @ViewChild('exchangeRates') exchangeRates!: LiveExchangeRatesComponent;

  tabState: 'CONVERT' | 'COMPARE' = 'CONVERT';

  constructor(private apiService: ApiService) { }


  checkForChanges(rates: ICompareRes) {

    const oldPortfolio = this.apiService.getPortfolio();
    oldPortfolio.forEach((el: ICurrency) => {
      if (el.code === rates.destination1) {
        el.rate = rates.amount1;
      }
      if (el.code === rates.destination2) {
        el.rate = rates.amount2;
      }
    });

    
    this.apiService.setNewPortfolio(oldPortfolio);
    this.exchangeRates.getMyPortfolio();
  }

}


