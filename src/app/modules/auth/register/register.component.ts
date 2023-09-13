import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //input

  //definimos de forma publica el servicioAuth, servicioFireStore, router
  constructor(
    public servicioAuth :AuthService,
    public serviceFirestore:FirestoreService,
    public router:Router
    ) { }
  //importacion del modelo  
  usuarios:Usuario = {
    uid: '',
    nombre:'',
    email:'',
    rol:'',
    contrasena:''
  }
  uid='';
  //creamos coleccion de usuario
  coleccionUsuarios:Usuario[]=[];
  //tomando nuevo registro
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };
    const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contrasena)
    //metodo then devuelve misma promesa
    .then(res =>{
      alert("Ha agregado un nuevo usuario con exito :)");
      
      this.router.navigate(["/inicio"]);
    })
    //metodo catch creara un error en caso de que algo salga mal
    .catch(error =>
      alert("Hubo un error a agregar al usuario :( \n"+error)
      );
      const uid = await this.servicioAuth.getUid();
      this.usuarios.uid = uid;
      this.guardarUser();
   
  }
  //funcion asincronica para guardar usuarios
  async guardarUser(){
    this.serviceFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error=>', error);
    })
  }
  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}