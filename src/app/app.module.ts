import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerSideRoutingModule } from './viewer-side/viewer-side-routing.module';
import { SupplierSideRoutingModule } from './supplier-side/supplier-side-routing.module';

import { SharedModule } from './shared/shared.module';
import {AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ViewerSideRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ 
      timeOut: 1000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
