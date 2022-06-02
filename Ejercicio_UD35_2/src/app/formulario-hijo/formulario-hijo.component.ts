import { Component, Input, OnInit } from '@angular/core';
import { Formulario } from '../form.component';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent implements OnInit {

  /** Se utiliza el decorador para enviar el formulario a otro componente */
  @Input()
  listadoFormularios!:Formulario;

  @Input()
  indice!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
