import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';


export class CurrencyResolver {
  apiService = inject(ApiService);
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('resolver works');
    return this.apiService.getSymbols();
  }
}