export class Formulario{

  /** Se definen las variables del formulario de contacto */
  nombreApellidos:string = "";
  correoElectronico:string = "";
  mensajeArea:string = "";
  validador:number = 0;

  /** Se crea el constructor de clase */
  constructor(nombreApellidos:string, correoElectronico:string, mensajeArea:string, validador:number){
    this.nombreApellidos = nombreApellidos;
    this.correoElectronico = correoElectronico;
    this.mensajeArea = mensajeArea;
    this.validador = validador;
  }
}
