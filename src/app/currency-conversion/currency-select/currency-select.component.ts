import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent {
  @Input() label: string = 'From';
  @Input() selectedCurrency: string = 'EGP';

  constructor(public apiService: ApiService) { }



}
