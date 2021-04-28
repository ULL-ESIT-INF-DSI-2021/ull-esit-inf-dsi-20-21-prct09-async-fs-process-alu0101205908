import { unlinkSync } from "fs";
import { Print } from "../print/print"
import { Add } from "./operacionAdd";


/**
 * Class Modify. Utilizada para realizar la operación de Modify (modifica la nota de un 
 * usuario dado el título). Se comprueba si la nota dada por el usuario existe, en caso 
 * negativo se mostrará un mensaje de ERROR. Si la nota existe se borrará y se procederá 
 * a invocar a la operación Add, pasandole las especificaciones indicadas en el comando
 * modify.
 */
export class Modify {

    private rutaFichero: string = "";


    /**
     * Constructor de la clase Modify.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     * @param texto Texto que contendrá la nota.
     * @param color Color que tendrá el título de la nota.
     */
    constructor(usuario: string, titulo: string, texto: string, color: string){
        
        this.rutaFichero = `./src/bbdd/${usuario}/${titulo}.json`;

        if (this.comprobarNotaExistente(titulo) == 0) {
            
            new Add(usuario, titulo, texto, color);
        }
    }


    /**
     * Método comprobarNotaExistente. Se comprueba si la nota existe, en caso afirmativo,
     * se borrará, y en caso negativo se lanzará un mensaje de ERROR.
     * @param titulo 
     * @returns 
     */
    comprobarNotaExistente(titulo: string){

        try{
            unlinkSync(this.rutaFichero);
            return new Print(`OK: Se ha modificado la nota ${titulo}`).printVerde();
        }
        catch(err){
            return new Print(`ERROR: No existe una nota con el titulo ${titulo}`).printRojo();
        }
    }
}