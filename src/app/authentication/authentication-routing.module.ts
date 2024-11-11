import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'UserHomePage',loadChildren: () => import('../viewer-side/viewer-side.module').then(m => m.ViewerSideModule)},
  // {path:'SupplierDeshboard',loadChildren: () => import('../supplier-side/supplier-side.module').then(m => m.SupplierSideModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
