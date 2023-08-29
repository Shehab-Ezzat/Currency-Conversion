import { Component, EventEmitter, Output } from '@angular/core';
import { ICompare, ICompareRes, ICurrency } from 'src/app/models/currency.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  @Output() onAction: EventEmitter<ICompareRes> = new EventEmitter();

  amount: number = 1;
  result1!: number;
  result2!: number;
  selectedFrom!: ICurrency;
  selectedTo1!: ICurrency;
  selectedTo2!: ICurrency;

  constructor(private apiService: ApiService) { }

  submit() {
    const data: ICompare = {} as ICompare;
    data.amount = this.amount;
    data.from = this.selectedFrom ? this.selectedFrom.code : 'EGP';
    data.to1 = this.selectedTo1 ? this.selectedTo1.code : 'USD';
    data.to2 = this.selectedTo2 ? this.selectedTo2.code : 'EUR';
    this.apiService.compare(data).subscribe({
      next: (res) => {
        this.result1 = res.amount1;
        this.result2 = res.amount2;
        this.onAction.emit(res);
      }
    })
  }
}
