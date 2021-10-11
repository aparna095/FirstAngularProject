import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProceedCheckOutComponent } from './proceed-check-out/proceed-check-out.component';
import { CheckOutGuardService } from './check-out-guard.service';

const appRoutes:Routes = [
  {path:"home" , component:HomeComponent},
  {path:"product-list" , component:ProductListComponent},
  {path:"product-details/:prodId", component:ProductDetailsComponent},
  {path:"cart-details" , component:CartDetailsComponent},
  {path:"cart/:prodId",component:CartComponent},
  {path:"check-out",component:CheckOutComponent, canActivate:[CheckOutGuardService]},
  {path:"proceed-check-out",component:ProceedCheckOutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    CartComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckOutComponent,
    ProceedCheckOutComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
