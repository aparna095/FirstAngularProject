import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service:ProductService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((x)=>{
      let temp = x['prodId']
      this.service.addProduct(+temp)
    })

  }

}
