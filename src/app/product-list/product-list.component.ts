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


  panier: Product[] = [];
   sum:number = 0;

  constructor(
    private productService: ProductService
  ) {

  }

  add(id: number) {
    let test = this.productService.fetchById(id - 1);
    this.panier.push(test);

    this.TotalPrice()

    console.log(this.panier);
  }

  lessProduct(id: number){

    let quantity = this.productService.fetchById(id - 1);
    let price = quantity.price;
    if(quantity.quantity != 1 ){
      quantity.quantity -=1;
      quantity.price -= price;
    }
  }

  moreProduct(id: number){
    let price = 0
    let quantity = this.productService.fetchById(id - 1);
    quantity.price = quantity.price;
     price = quantity.price;
    quantity.quantity +=1;
    quantity.price += price;
    console.log(price);
    console.log(quantity);

  }

  delete(id: number){
    let item = this.productService.fetchById(id - 1);
    let index = this.panier.indexOf(item);

      this.panier.splice(index, 1);
    this.TotalPrice()
      console.log(this.panier);

  }


  TotalPrice(){
    this.sum = 0;
    for (let product of this.panier) {
      this.sum += product.price;
    }
  }

}
