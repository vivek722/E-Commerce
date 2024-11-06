import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { SupplierSideBarComponent } from './supplier-side-bar/supplier-side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserFooterComponent,
    UserheaderComponent,
    SupplierSideBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    UserFooterComponent,
    UserheaderComponent
  ]
})
export class SharedModule { }
