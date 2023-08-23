import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConversionRoutingModule } from './currency-conversion-routing.module';
import { CurrencyConversionComponent } from './currency-conversion.component';
import { ConvertComponent } from './convert/convert.component';
import { CompareComponent } from './compare/compare.component';


@NgModule({
  declarations: [
    CurrencyConversionComponent,
    ConvertComponent,
    CompareComponent
  ],
  imports: [
    CommonModule,
    CurrencyConversionRoutingModule
  ]
})
export class CurrencyConversionModule { }
