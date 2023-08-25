import { ResolveFn } from '@angular/router';
import { ApiService } from './api.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { ICurrency } from '../models/currency.model';
export const currencyResolver: ResolveFn<ICurrency[]> = (
  route,
  state,
  apiService: ApiService = inject(ApiService)) => {
  return apiService.getSymbols().pipe(tap(c => {
    apiService.currencies = c;
  }))
};
