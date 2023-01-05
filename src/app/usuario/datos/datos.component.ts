import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
    edad = "";
    mensaje ="";
    resultado = true;
  
    validarEdad(edad:string){
      if(edad >= "18"){
        this.resultado = true;
        this.mensaje="Eres mayor de edad"
      }else{
        this.resultado = true;
        this.mensaje = "Eres menor de edad"
      }
  
    }

}
