import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConversionComponent } from './currency-conversion.component';
import { currencyResolver } from '../services/currency.resolver';

const routes: Routes = [
  { path: '', component: CurrencyConversionComponent, resolve: { post: currencyResolver }, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyConversionRoutingModule { }
