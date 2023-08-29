import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICurrency } from 'src/app/models/currency.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent {
  @Input() label: string = 'From';
  @Input() selectedCurrency: string = 'EGP';
  @Output() getSelection: EventEmitter<ICurrency> = new EventEmitter();
  constructor(public apiService: ApiService) { }


  onSelect() {
    const selected = this.apiService.currencies.find(c => c.code === this.selectedCurrency)
    this.getSelection.emit(selected);
  }
}
