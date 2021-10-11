import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-proceed-check-out',
  templateUrl: './proceed-check-out.component.html',
  styleUrls: ['./proceed-check-out.component.css']
})
export class ProceedCheckOutComponent implements OnInit {

  constructor(public service:ProductService) { }

  ngOnInit(): void {

    this.service.cartProducts = []
  }

}
