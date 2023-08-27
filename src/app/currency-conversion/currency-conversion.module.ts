import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConversionRoutingModule } from './currency-conversion-routing.module';
import { CurrencyConversionComponent } from './currency-conversion.component';
import { ConvertComponent } from './convert/convert.component';
import { CompareComponent } from './compare/compare.component';
import { CurrencySelectComponent } from './currency-select/currency-select.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { LiveExchangeRatesComponent } from './live-exchange-rates/live-exchange-rates.component';
import { PortfolioCardComponent } from './live-exchange-rates/portfolio-card/portfolio-card.component';
import { AddToFavComponent } from './add-to-fav/add-to-fav.component';


@NgModule({
  declarations: [
    CurrencyConversionComponent,
    ConvertComponent,
    CompareComponent,
    CurrencySelectComponent,
    LiveExchangeRatesComponent,
    PortfolioCardComponent,
    AddToFavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyConversionRoutingModule,
    PipesModule
  ]
})
export class CurrencyConversionModule { }
