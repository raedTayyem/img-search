import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user';

var _productsDb: any[] = [];

// var productName = document.getElementsByClassName('prod_name');
// _productsDb
// console.log('ok');
// Mock the database
// for (let i = 0; i < productName.length; i++) {

// }

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  private _contacts$: any = new BehaviorSubject([]);

  public contacts$ = this._contacts$.asObservable();

  getProducts(products: any) {
    _productsDb = products;
  }

  loadusers(filterBy = { term: '' }) {
    const contacts = _productsDb.filter(({ name }) => {
      return name.includes(filterBy.term);
    });
    this._contacts$.next(contacts);
    return contacts;
  }

  public filterProduct(productName: any) {
    const contacts = _productsDb.filter(({ name }) => {
      return name.includes(productName);
    });
    this._contacts$.next(contacts);
    return contacts;
  }
}
