import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  products:Product[] =[]
  constructor(public service:ProductService) { }

  ngOnInit(): void {

    this.products = this.service.returnProducts()
  }

}
