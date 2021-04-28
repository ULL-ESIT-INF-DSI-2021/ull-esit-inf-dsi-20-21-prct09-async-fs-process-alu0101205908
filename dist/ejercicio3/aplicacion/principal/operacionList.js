"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs_2 = require("fs");
const print_1 = require("../print/print");
/**
 * Clase List. Utilizada para realizar la operación de List (listar las notas de un
 * usuario). Se comprueba si el usuario tiene notas o no, y en caso afirmativo se
 * muestran los títulos de las notas en el color indicado en la misma.
 */
class List {
    /**
     * Constructor de la clase List.
     * @param usuario Usuario dueño de la/las nota/s.
     */
    constructor(usuario) {
        this.listaNotas = [];
        this.ruta = "";
        try {
            this.ruta = "./src/bbdd/" + usuario;
            this.comprobarNotas();
        }
        catch (err) {
            new print_1.Print(`ERROR: El usuario ${usuario} no tiene notas.`).printRojo();
        }
    }
    /**
     * Método comprobarNotas. Se lee el directorio del usuario y se almacenan en un array
     * los títulos de las notas. Se comprueba si el array está vacío, lo que indicaría que
     * el usuario no tiene notas, y en caso contrario, se comprobará el color que se indica
     * en la nota y se mostrará por la terminal el título con el color específico.
     */
    comprobarNotas() {
        fs_1.readdirSync(this.ruta).forEach(nota => {
            this.listaNotas.push(nota);
        });
        if (this.listaNotas.length == 0) {
            throw "ERROR: El usuario no tiene notas.";
        }
        else {
            new print_1.Print("Tiene las siguientes notas: ").printVerde();
            this.listaNotas.forEach(nota => {
                const datos = fs_2.readFileSync(`${this.ruta}/${nota}`).toString();
                if (datos.includes(`"color": "rojo"`)) {
                    new print_1.Print(`${nota}`).printRojo();
                }
                else if (datos.includes(`"color": "azul"`)) {
                    new print_1.Print(`${nota}`).printAzul();
                }
                else if (datos.includes(`"color": "verde"`)) {
                    new print_1.Print(`${nota}`).printVerde();
                }
                else if (datos.includes(`"color": "amarillo"`)) {
                    new print_1.Print(`${nota}`).printAmarillo();
                }
            });
        }
    }
}
exports.List = List;
