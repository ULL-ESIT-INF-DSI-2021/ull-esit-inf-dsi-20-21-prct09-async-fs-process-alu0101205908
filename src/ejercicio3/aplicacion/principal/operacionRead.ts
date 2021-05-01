import { readFileSync } from "fs";
import { openSync } from "fs";
import { Print } from "../print/print"


/**
 * Clase Read. Utilizada para realizar la operación de Read (leer una nota).
 * Se comprueba si existe una nota título dado. En caso negativo se mostrará un
 * mensaje de error, y en caso afirmativo, se mostrará el titulo de acuerdo al color
 * que especifica la nota, y se mostrará el texto que tiene la misma.
 */
export class Read {

    private rutaFichero: string = "";
    private titulo: string = "";
    private nota: string = "";
    private texto: string = "";


    /**
     * Constructor de la clase Read.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     */
    constructor(usuario: string, titulo: string){
        
        this.rutaFichero = `./src/ejercicio3/bbdd/${usuario}/${titulo}.json`;

        if (this.comprobarNotaExistente(titulo) == 0) {
            
            this.nota = readFileSync(this.rutaFichero).toString();
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
    comprobarNotaExistente(titulo: string){

        try{
            openSync(this.rutaFichero, "r");
            return new Print("").printVerde();
        }
        catch(err){
            return new Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }


    /**
     * Método tituloNota. Se utiliza para mostrar el título de la nota de acuerdo al color
     * que se especifica en la misma.
     */
    tituloNota(){
            
        if (this.nota.includes(`"color": "rojo"`)){
            new Print(`${this.titulo}`).printRojo();
        }
        else if (this.nota.includes(`"color": "azul"`)){
            new Print(`${this.titulo}`).printAzul();
        }
        else if (this.nota.includes(`"color": "verde"`)){
            new Print(`${this.titulo}`).printVerde();
        }
        else if (this.nota.includes(`"color": "amarillo"`)){
            new Print(`${this.titulo}`).printAmarillo();
        }
    }


    /**
     * Método textoNota. Se utiliza para mostrar el texto de la nota.
     */
    textoNota(){

        let i: number = this.nota.indexOf(`texto":`);
        let j: number = this.nota.indexOf(`"color":`);
        this.texto = this.nota.substring(i+9, j-7); // Ajuste para obtener la substring con el texto de la nota
        console.log(this.texto);
    }
}