import { Injectable } from '@angular/core';
import {PRODUCT} from "./mock-product";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  fetchAllProduct(){
    return PRODUCT;
  }

  fetchById(id: number){
    return PRODUCT[id];
  }

}
