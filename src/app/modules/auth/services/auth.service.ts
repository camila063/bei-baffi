import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar autentificacion de firebase
  constructor(public auth:AngularFireAuth) { }
    iniciarSesion(email: string, contrasena: string){
      return this.auth.signInWithEmailAndPassword(email,contrasena)
    }
    cerrarSesion(){
      return this.auth.signOut();
    }

    registrar(nombre:string,contrasena:string) {
      return this.auth.createUserWithEmailAndPassword(nombre,contrasena)
    }

  async getUid(){
    const user = await this.auth.currentUser;
    if(user == null){
      return null;
    }else{
      return user.uid
    }
 }

}