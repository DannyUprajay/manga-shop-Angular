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

  lessProduct(id: number){
    let quantity = this.productService.fetchById(id - 1);
    let price = quantity.price;
    if(quantity.quantity  == 0 ){
      quantity.quantity = 0;
      quantity.price = price;
    }else{
      quantity.quantity -=1;
      quantity.price -= price;

    }
  }

  moreProduct(id: number){
    let quantity = this.productService.fetchById(id - 1);
    let price = quantity.price;
    quantity.quantity +=1;
    quantity.price += price;
    console.log(price);
    console.log(quantity);

  }

}
