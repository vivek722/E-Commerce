import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { SupplierSideModule } from '../supplier-side/supplier-side.module';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserProductDetailComponent } from './user-product-detail/user-product-detail.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component'; 
import { RouterModule } from '@angular/router';
import { ViewerSideRoutingModule } from './viewer-side-routing.module';

@NgModule({
  declarations: [
    UserHomeComponent,
    UserWishlistComponent,
    UserProductDetailComponent,
    UserAddToCartComponent,
    UserHomeDesignComponent
  ],
  imports: [
    CommonModule,
    SupplierSideModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    ViewerSideRoutingModule
],
exports:[
  UserHomeComponent
]
})
export class ViewerSideModule { }
