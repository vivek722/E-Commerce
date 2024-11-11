import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierDeshBordComponent } from './supplier-desh-bord/supplier-desh-bord.component';
import { SupplierDeshBordDesignComponent } from './supplier-desh-bord-design/supplier-desh-bord-design.component';
import { DetailsAboutProductComponent } from './details-about-product/details-about-product.component';
import { DetailsAboutInventoryComponent } from './details-about-inventory/details-about-inventory.component';

const routes: Routes = [
   {path:'',redirectTo:'supplier/DeshboardDesign',pathMatch:'full'},
   {
    path: 'supplier', 
    component: SupplierDeshBordDesignComponent,
    children: [
      {
        path: 'DeshboardDesign',
        component: SupplierDeshBordComponent
      },
      {
        path: 'ProductDetails',
        component: DetailsAboutProductComponent
      },
      {
        path: 'InventoryDetails',
        component: DetailsAboutInventoryComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierSideRoutingModule { }
