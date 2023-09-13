import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componente
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    //componente
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
