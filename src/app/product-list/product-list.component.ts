import { Component } from '@angular/core';
import {Product} from "../product";
import {PRODUCT} from "../mock-product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList: Product[] = PRODUCT;

  // panier: Product = {} as Product;
  panier: Product[] = [];

  constructor(
    private productService: ProductService
  ) {
  }

  add(id: number) {
    let test = this.productService.fetchById(id - 1);
    this.panier.push(test);
    // this.panier = this.productService.fetchById(id - 1) ;
    console.log(this.panier);
  }



}
