import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _customers: string[] = [
    'KPN',
    'Ziggo',
    'Vodafone',
    'T-mobile'
  ]
  get customers() {
    return this._customers
  }
}
