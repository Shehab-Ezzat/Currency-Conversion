import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'currency',
    loadChildren: () =>
      import('./currency-conversion/currency-conversion.module').then(
        (m) => m.CurrencyConversionModule
      )
  },
  { path: '', redirectTo: 'currency', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
