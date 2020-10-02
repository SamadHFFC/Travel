import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CPAdminComponent } from './cpadmin/cpadmin.component';
import { AppComponent } from './app.component';
import {CpLoginComponent} from'./cp-login/cp-login.component';
import { CpFormComponent } from './cp-form/cp-form.component';




const routes: Routes = [
  {path: '' , component :AppComponent},
  {path: 'cp-login' ,  component :CpLoginComponent},
  {path: 'cpadmin', component: CPAdminComponent},
  {path: 'cp-form', component: CpFormComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
