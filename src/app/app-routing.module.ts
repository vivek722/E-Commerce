import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './viewer-side/user-home/user-home.component';
import { AddInventoryComponent } from './supplier-side/add-inventory/add-inventory.component';
import { AddProductComponent } from './supplier-side/add-product/add-product.component';
import { SupplierSideBarComponent } from './shared/supplier-side-bar/supplier-side-bar.component';
import { UserLoginComponent } from './authentication/user-login/user-login.component';
import { UserRegisterComponent } from './authentication/user-register/user-register.component';
import { UserHomeDesignComponent } from './viewer-side/user-home-design/user-home-design.component';

const routes: Routes = [
  {path:'',redirectTo:'UserHomePage',pathMatch:'full'},
  {path:'UserHomePage',loadChildren: () => import('./viewer-side/viewer-side.module').then(m => m.ViewerSideModule)},
  {path:'Login',component:UserLoginComponent},
  {path:'UserRegister',component:UserRegisterComponent},
  {path:'Supplier',loadChildren: () => import('./supplier-side/supplier-side.module').then(m => m.SupplierSideModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
