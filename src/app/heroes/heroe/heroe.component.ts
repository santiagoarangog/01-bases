import { Component } from '@angular/core';

@Component({
    selector: 'heroe-component',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'Ironamn';
    edad:number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():number{
        return this.edad = 70;
    }
}