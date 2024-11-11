import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';

const routes: Routes = [
  {path:'',redirectTo:'User/homePage',pathMatch:'full'},

  {path:'User',component:UserHomeComponent,
      children:[
        {path:'homePage',component:UserHomeDesignComponent},
      ]
    },
    {path:'AddSupplier',component:SupplierRegistrationComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerSideRoutingModule { }
