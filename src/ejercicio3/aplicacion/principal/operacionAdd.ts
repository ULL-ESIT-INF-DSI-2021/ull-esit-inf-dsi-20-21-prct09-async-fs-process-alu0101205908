import { writeFileSync } from 'fs';
import { openSync } from 'fs';
import { Print } from "../print/print"
import { mkdirSync } from 'fs';
import { Nota } from "../principal/tipoDefinido"


/**
 * Clase Add. Utilizada para realizar la operación de Add (agregar una nueva nota).
 * Se comprueba si el usuario es nuevo o no, y en caso negativo, se creará el directorio
 * donde se alojarán sus notas. Se comprueba si ya existe una nota con el mismo título
 * para el usuario dado, y en caso afirmativo se lanzará un mensaje de ERROR. Se comprueba 
 * si el color introducido está disponible (rojo | azul | verde | amarillo). En caso de que
 * cumpla todas las comprobaciones, se añadirá una nueva nota al directorio del usuario.
 */
export class Add {

    private nota: Nota = {usuario: "", titulo: "", texto: "", color: ""};
    private ruta: string = "";
    private rutaFichero: string = "";


    /**
     * Constructor de la clase Add.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     * @param texto Texto que contendrá la nota.
     * @param color Color que tendrá el título de la nota.
     */
    constructor(usuario: string, titulo: string, texto: string, color: string){

        this.ruta = "./src/bbdd/" + usuario;
    
        this.rutaFichero = `./src/bbdd/${usuario}/${titulo}.json`;

        this.esNuevoUsuario(usuario);

        if (this.comprobarNotaExistente(titulo) == 0){

            if (this.comprobarColor(color) == 0){
                this.nota = {usuario: usuario, titulo: titulo, texto: texto, color: color};
                this.addNota();
            }
        }
    }


    /**
     * Método comprobarNotaExistente. Se comprueba si ya existe una nota con el mismo título.
     * @param titulo Título de la nota a añadir.
     * @returns Retorna un 0 si hay ya una nota con ese título, o, un 1 en caso contrario.
     */
    comprobarNotaExistente(titulo: string){

        try{
            openSync(this.rutaFichero, "r");
            return new Print(`ERROR: Ya existe una nota con el titulo ${titulo}`).printRojo();
        }
        catch(err){
            return new Print(`OK: Se va a crear una nota con el titulo ${titulo}`).printVerde();
        }
    }


    /**
     * Método esNuevoUsuario. Se comprueba si el usuario ya tiene un directorio creado o no.
     * @param usuario Usuario propietario de la nota.
     * @returns Retorna un 0 si hay ya un usuario con ese nombre, o, un 1 en caso contrario.
     */
    esNuevoUsuario(usuario: string){
        try{
            mkdirSync(this.ruta);
            return new Print("").printRojo();
        }
        catch(err){
            return new Print("BIENVENIDO DE NUEVO").printVerde();
        }
    }


    /**
     * Método comprobarColor. Se comprueba si el color para el título está disponible o no.
     * @param color Color para el título.
     * @returns Retorna un 0 si el color no está disponible, o, un 1 en caso contrario.
     */
    comprobarColor(color: string){
        if (color != "rojo" && color != "azul" && color != "verde" && color != "amarillo") {
            return new Print(`ERROR: El color ${color} no está disponible`).printRojo();
        }
        else{
            return new Print("").printVerde();
        }
    }


    /**
     * Método addNota. Utilizado para crear la nota del usuario.
     */
    addNota(){

        let aux: JSON[] =  [];
        aux.push(JSON.parse(`{"usuario": "${this.nota.usuario}", "titulo": "${this.nota.titulo}", "texto": "${this.nota.texto}", "color": "${this.nota.color}"}`));
        writeFileSync(this.rutaFichero, JSON.stringify(aux, null, 2));
        new Print(`OK: Se ha creado una nueva nota con el titulo ${this.nota.titulo}`).printVerde();
    }
}