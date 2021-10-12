import { Injectable } from '@angular/core';
import {PRODUCTS} from '../mockdb';
import {Observable, of} from 'rxjs';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProducts(): Observable<Product[]>{
    return of(PRODUCTS);
  }
}
