import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})

export class Personas {

    personas: Persona[];

    persona: Persona;

    constructor() {
        this.personas = [];
        this.persona = new Persona();
    }

    aniadirPersona() {

        if (this.persona.esValido()) {
            this.personas.push(this.persona);
            this.persona = new Persona();
            console.log('Persona añadida');
        }else {
            console.log('Persona no valida');
        }


    }

    isEmpty() {
        return this.personas.length === 0;
    }

}

class Persona {

    nombre: String;
    apellidos: String;
    edad: Number;
    DNI: String;

    constructor() { }

    esValido() {
        if (this.nombre === undefined ||
            this.apellidos === undefined ||
            this.edad === undefined ||
            this.DNI === undefined) {
                return false;
        }
        return true;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }

    mostrarInfo() {
        return 'Edad: ' + this.edad + ', DNI: ' + this.DNI;
    }

}
