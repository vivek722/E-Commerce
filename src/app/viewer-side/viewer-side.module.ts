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
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    UserHomeComponent,
    UserWishlistComponent,
    UserProductDetailComponent,
    UserAddToCartComponent,
    UserHomeDesignComponent,
    SupplierRegistrationComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SupplierSideModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    ViewerSideRoutingModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
],
exports:[
  UserHomeComponent
]
})
export class ViewerSideModule { }
