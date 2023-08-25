import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegsiterComponent } from './pages/regsiter/regsiter.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegsiterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
