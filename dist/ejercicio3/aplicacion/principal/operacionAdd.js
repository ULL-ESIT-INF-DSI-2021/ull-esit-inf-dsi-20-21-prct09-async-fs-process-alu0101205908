"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs_2 = require("fs");
const print_1 = require("../print/print");
const fs_3 = require("fs");
/**
 * Clase Add. Utilizada para realizar la operación de Add (agregar una nueva nota).
 * Se comprueba si el usuario es nuevo o no, y en caso negativo, se creará el directorio
 * donde se alojarán sus notas. Se comprueba si ya existe una nota con el mismo título
 * para el usuario dado, y en caso afirmativo se lanzará un mensaje de ERROR. Se comprueba
 * si el color introducido está disponible (rojo | azul | verde | amarillo). En caso de que
 * cumpla todas las comprobaciones, se añadirá una nueva nota al directorio del usuario.
 */
class Add {
    /**
     * Constructor de la clase Add.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     * @param texto Texto que contendrá la nota.
     * @param color Color que tendrá el título de la nota.
     */
    constructor(usuario, titulo, texto, color) {
        this.nota = { usuario: "", titulo: "", texto: "", color: "" };
        this.ruta = "";
        this.rutaFichero = "";
        this.ruta = "./src/ejercicio3/bbdd/" + usuario;
        this.rutaFichero = `./src/ejercicio3/bbdd/${usuario}/${titulo}.json`;
        this.esNuevoUsuario(usuario);
        if (this.comprobarNotaExistente(titulo) == 0) {
            if (this.comprobarColor(color) == 0) {
                this.nota = { usuario: usuario, titulo: titulo, texto: texto, color: color };
                this.addNota();
            }
        }
    }
    /**
     * Método comprobarNotaExistente. Se comprueba si ya existe una nota con el mismo título.
     * @param titulo Título de la nota a añadir.
     * @returns Retorna un 0 si hay ya una nota con ese título, o, un 1 en caso contrario.
     */
    comprobarNotaExistente(titulo) {
        try {
            fs_2.openSync(this.rutaFichero, "r");
            return new print_1.Print(`ERROR: Ya existe una nota con el titulo ${titulo}`).printRojo();
        }
        catch (err) {
            return new print_1.Print(`OK: Se va a crear una nota con el titulo ${titulo}`).printVerde();
        }
    }
    /**
     * Método esNuevoUsuario. Se comprueba si el usuario ya tiene un directorio creado o no.
     * @param usuario Usuario propietario de la nota.
     * @returns Retorna un 0 si hay ya un usuario con ese nombre, o, un 1 en caso contrario.
     */
    esNuevoUsuario(usuario) {
        try {
            fs_3.mkdirSync(this.ruta);
            return new print_1.Print("").printRojo();
        }
        catch (err) {
            return new print_1.Print("BIENVENIDO DE NUEVO").printVerde();
        }
    }
    /**
     * Método comprobarColor. Se comprueba si el color para el título está disponible o no.
     * @param color Color para el título.
     * @returns Retorna un 0 si el color no está disponible, o, un 1 en caso contrario.
     */
    comprobarColor(color) {
        if (color != "rojo" && color != "azul" && color != "verde" && color != "amarillo") {
            return new print_1.Print(`ERROR: El color ${color} no está disponible`).printRojo();
        }
        else {
            return new print_1.Print("").printVerde();
        }
    }
    /**
     * Método addNota. Utilizado para crear la nota del usuario.
     */
    addNota() {
        let aux = [];
        aux.push(JSON.parse(`{"usuario": "${this.nota.usuario}", "titulo": "${this.nota.titulo}", "texto": "${this.nota.texto}", "color": "${this.nota.color}"}`));
        fs_1.writeFileSync(this.rutaFichero, JSON.stringify(aux, null, 2));
        new print_1.Print(`OK: Se ha creado una nueva nota con el titulo ${this.nota.titulo}`).printVerde();
    }
}
exports.Add = Add;
