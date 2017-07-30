import { Component } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../views/error.html'
})

export class ErrorComponent{
    public titulo: string;

    constructor(){
        this.titulo = 'Error 404!!  Página no encontrada.';
    }

    ngOnInit(){

        console.log('Componente error.conponent.ts cargado!!');
    }
}