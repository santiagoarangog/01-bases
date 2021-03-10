import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  // Declaración de un arreglo
  personajes: Personaje[] = [
    {      
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 2000
  }

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }  
}
