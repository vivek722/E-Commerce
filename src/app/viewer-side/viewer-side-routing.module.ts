import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:'',redirectTo:'test',pathMatch:'full'},

  {path:'test',component:UserHomeComponent,
      children:[
        {path:'home',component:UserHomeDesignComponent},
      ]
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerSideRoutingModule { }
