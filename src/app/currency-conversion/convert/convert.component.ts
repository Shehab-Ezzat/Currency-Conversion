import { Component } from '@angular/core';
import { IConvert, ICurrency } from 'src/app/models/currency.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent {
  amount: number = 1;
  selectedFrom!: ICurrency;
  selectedTo!: ICurrency;
  result!: number;

  constructor(private apiService: ApiService) { }

  submit() {
    const conversionData: IConvert = {} as IConvert;
    conversionData.amount = this.amount;
    conversionData.from = this.selectedFrom ? this.selectedFrom.code : 'EGP';
    conversionData.to = this.selectedTo ? this.selectedTo.code : 'USD';
    this.apiService.convert(conversionData).subscribe({
      next: (res) => {
        this.result = res.amount;
      }
    })
  }
}
