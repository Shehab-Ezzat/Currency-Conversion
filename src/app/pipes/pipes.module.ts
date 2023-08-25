import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFlagPipe } from './currency-flag.pipe';



@NgModule({
  declarations: [CurrencyFlagPipe],
  imports: [
    CommonModule
  ],
  exports: [CurrencyFlagPipe]
})
export class PipesModule { }
