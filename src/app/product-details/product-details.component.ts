import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product
  constructor(public service:ProductService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((x)=>{
      let temp = x['prodId']
      this.product = this.service.findProduct(+temp)!
    })
  }

}
