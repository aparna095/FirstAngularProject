import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  custName:string
  city:string
  pin:string
  mobile:string
  
  constructor(){
    this.custName = 'Aparna'
    this.city = 'Patna'
    this.pin = '800025'
    this.mobile= '9876787652'
}

  ngOnInit(): void {
  }

}
