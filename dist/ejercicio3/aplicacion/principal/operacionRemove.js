"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const print_1 = require("../print/print");
/**
 * Clase Remove. Utilizada para realizar la operación de Remove (eliminar una nota).
 * Se comprueba si existe una nota título dado. En caso negativo se mostrará un
 * mensaje de error, y en caso afirmativo, se eliminará la nota.
 */
class Remove {
    /**
     * Constructor de la clase Remove.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     */
    constructor(usuario, titulo) {
        this.rutaFichero = "";
        this.rutaFichero = `./src/ejercicio3/bbdd/${usuario}/${titulo}.json`;
        this.comprobarNotaExistente(titulo);
    }
    /**
     * Método comprobarNotaExistente. Se utiliza para comprobar si la nota con el título
     * dado existe o no.
     * @param titulo Título de la nota a eliminar.
     * @returns SE retornará un 0 si la nota existe, o, un 1 en caso de que no exista.
     */
    comprobarNotaExistente(titulo) {
        try {
            //unlinkSync(this.rutaFichero);
            return new print_1.Print(`OK: Se ha eliminado la nota con titulo: ${titulo}`).printVerde();
        }
        catch (err) {
            return new print_1.Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }
}
exports.Remove = Remove;
