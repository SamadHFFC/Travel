import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CPAdminComponent } from './cpadmin/cpadmin.component';
import { AppRoutingModule } from './app-routing.module';
import { CpLoginComponent } from './cp-login/cp-login.component';
import {MaterialModule} from './material/material.module';
import { CpFormComponent } from './cp-form/cp-form.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    // FlexLayoutModule
  
    
  ],
  declarations: [
    AppComponent,
    
    CPAdminComponent,
    
    CpLoginComponent,
    
    CpFormComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }