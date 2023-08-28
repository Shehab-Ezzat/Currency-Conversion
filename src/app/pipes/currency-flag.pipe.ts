import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from '../services/api.service';

@Pipe({
  name: 'currencyFlag'
})
export class CurrencyFlagPipe implements PipeTransform {

  constructor(private apiService: ApiService) { }

  transform(currencyCode: string): string {

    let icon = '';
    if (currencyCode) {
      icon = this.apiService.currencies.find(c => c.code === currencyCode)!.imageUrl;
    }
    return icon;
  }

}
