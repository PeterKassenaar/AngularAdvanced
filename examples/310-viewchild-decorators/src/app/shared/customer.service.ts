import {Injectable} from '@angular/core';

// Simple service that provides some data
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _customers: string[] =
    [
      'KPN',
      'Ziggo',
      'Vodafone',
      'T-mobile'
    ]
  get customers(): string[] {
    return this._customers
  }
}
