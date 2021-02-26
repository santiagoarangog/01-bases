import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    // Utilizamos los componentes creados
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Enviamos a la vista los componentes que deseamos
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    // Esto permite utilizar las directivas personalizadas de Angular
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}