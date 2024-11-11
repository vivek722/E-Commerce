import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { SupplierDeshBordComponent } from './supplier-desh-bord/supplier-desh-bord.component';
import { SharedModule } from '../shared/shared.module';
import { SupplierDeshBordDesignComponent } from './supplier-desh-bord-design/supplier-desh-bord-design.component';
import { SupplierSideRoutingModule } from './supplier-side-routing.module';
import { DetailsAboutProductComponent } from './details-about-product/details-about-product.component';
import { DetailsAboutInventoryComponent } from './details-about-inventory/details-about-inventory.component';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AddInventoryComponent,
    AddProductComponent,
    SupplierDeshBordComponent,
    SupplierDeshBordDesignComponent,
    DetailsAboutProductComponent,
    DetailsAboutInventoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    SupplierSideRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,  
    SlickCarouselModule
  ]
})
export class SupplierSideModule { }
