import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] =[
    new Product(101,'Mobile',9000),
    new Product(102,'Laptop',40000),
    new Product(103,'Watch',5000),
    new Product(104,'Shoes',2000),
    new Product(105,'HeadPhones',1000)
  ]

  cartProducts:Product[] =[]

  constructor() { }

  getProducts():Product[]{
    return this.products
  }
  findProduct(prodId:number):Product | undefined{
    return this.products.find(p=>p.prodId==prodId)
  }

  addProduct(prodId:number){
    this.cartProducts.push(this.products.find(p=>p.prodId==prodId)!)
  }

  returnProducts():Product[]{
    return this.cartProducts
  }

}
