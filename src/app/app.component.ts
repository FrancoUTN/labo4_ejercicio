import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // edadUno:number|undefined;
  // EdadDos:number|undefined;

  edadUno:any;
  EdadDos:any;

  // edadUno:number = 0;
  // EdadDos:number = 0;

  suma:any;
  promedio:any;

  Calcular()
  {
    this.suma = this.edadUno + this.EdadDos;
    this.promedio = this.suma / 2;
  }

  Limpiar()
  {
    this.edadUno = null;    
    this.EdadDos = null;
  }

  title = 'ejercicios';
}
