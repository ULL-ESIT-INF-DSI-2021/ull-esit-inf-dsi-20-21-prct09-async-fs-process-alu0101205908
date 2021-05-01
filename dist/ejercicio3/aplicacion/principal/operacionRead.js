"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs_2 = require("fs");
const print_1 = require("../print/print");
/**
 * Clase Read. Utilizada para realizar la operación de Read (leer una nota).
 * Se comprueba si existe una nota título dado. En caso negativo se mostrará un
 * mensaje de error, y en caso afirmativo, se mostrará el titulo de acuerdo al color
 * que especifica la nota, y se mostrará el texto que tiene la misma.
 */
class Read {
    /**
     * Constructor de la clase Read.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     */
    constructor(usuario, titulo) {
        this.rutaFichero = "";
        this.titulo = "";
        this.nota = "";
        this.texto = "";
        this.rutaFichero = `./src/ejercicio3/bbdd/${usuario}/${titulo}.json`;
        if (this.comprobarNotaExistente(titulo) == 0) {
            this.nota = fs_1.readFileSync(this.rutaFichero).toString();
            this.titulo = titulo;
            this.tituloNota();
            this.textoNota();
        }
    }
    /**
     * Método comprobarNotaExistente. Se comprueba si la nota con el título dado existe.
     * En caso negativo se lanzará un mensaje de ERROR.
     * @param titulo Título de la nota.
     * @returns SE retornará un 0 en caso de que la
     */
    comprobarNotaExistente(titulo) {
        try {
            fs_2.openSync(this.rutaFichero, "r");
            return new print_1.Print("").printVerde();
        }
        catch (err) {
            return new print_1.Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }
    /**
     * Método tituloNota. Se utiliza para mostrar el título de la nota de acuerdo al color
     * que se especifica en la misma.
     */
    tituloNota() {
        if (this.nota.includes(`"color": "rojo"`)) {
            new print_1.Print(`${this.titulo}`).printRojo();
        }
        else if (this.nota.includes(`"color": "azul"`)) {
            new print_1.Print(`${this.titulo}`).printAzul();
        }
        else if (this.nota.includes(`"color": "verde"`)) {
            new print_1.Print(`${this.titulo}`).printVerde();
        }
        else if (this.nota.includes(`"color": "amarillo"`)) {
            new print_1.Print(`${this.titulo}`).printAmarillo();
        }
    }
    /**
     * Método textoNota. Se utiliza para mostrar el texto de la nota.
     */
    textoNota() {
        let i = this.nota.indexOf(`texto":`);
        let j = this.nota.indexOf(`"color":`);
        this.texto = this.nota.substring(i + 9, j - 7); // Ajuste para obtener la substring con el texto de la nota
        console.log(this.texto);
    }
}
exports.Read = Read;
