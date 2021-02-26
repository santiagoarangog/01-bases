import { Component } from '@angular/core';
import { core } from "@angular/compiler";

import { } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <p>La base es {{base}} </p>

    <button (click)="acumular(base);">+{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base);">-{{base}}</button>
    `,
})

export class ContadorComponent{
  public title:string = 'Contador App';
  public numero:number = 10;
  public base:number = 5;

  // Tarea base:number = 5;

  acumular(valor:number){
    this.numero += valor;
  }
}