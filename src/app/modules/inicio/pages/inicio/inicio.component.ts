import { Component, OnInit } from '@angular/core';
import { TarjetasInicio } from 'src/app/models/modelos';
import { Animales } from 'src/app/models/animales';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: Animales[];
  constructor(){
    this.info = [
      {
        id:"",
        raza:"",
        descripcion:"", 
        imagen:"",
        alt:""
      },
      {
        id:"",
        raza:"",
        descripcion:"",
        imagen:"",
        alt:""
      }
    ]
  }
   ngOnInit(): void{
  }
}