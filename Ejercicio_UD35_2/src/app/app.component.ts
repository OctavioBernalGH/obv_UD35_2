import { Component } from '@angular/core';
import { Formulario } from './form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio_UD35_2';

  /** Se define un objeto de la clase formulario */
  formularios:Formulario[] = []

  cuadroNombreApellidos:string = "";
  cuadroCorreoElectronico:string = "";
  cuadroMensajeArea:string = "";
  cuadroValidador:number = 0;

  /** Se generan usuarios dinamicamente */
  crearUsuario(){
    /** Se verifican campos vacíos */
    if(this.cuadroNombreApellidos == "" ||
      this.cuadroCorreoElectronico == "" ||
      this.cuadroMensajeArea == ""){
        alert("Campos vacíos.")
    }
    /** Se verifica el captcha */
    else if(this.cuadroValidador != 5){
      alert("Has introducido mal el validador!")
    }
    else {
    /** Se construye un usuario con los datos de los cuadros de texto */
      let nuevoUsuario = new Formulario(
        this.cuadroNombreApellidos,
        this.cuadroCorreoElectronico,
        this.cuadroMensajeArea,
        this.cuadroValidador);
      /** Se inyecta el nuevo usuario al array de usuarios */
        this.formularios.push(nuevoUsuario);
    }

  }
}
