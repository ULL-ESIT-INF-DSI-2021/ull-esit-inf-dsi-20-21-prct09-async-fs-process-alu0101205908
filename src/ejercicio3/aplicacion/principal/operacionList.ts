import { readdirSync } from "fs";
import { readFileSync } from "fs";
import { Print } from "../print/print";


/**
 * Clase List. Utilizada para realizar la operación de List (listar las notas de un 
 * usuario). Se comprueba si el usuario tiene notas o no, y en caso afirmativo se 
 * muestran los títulos de las notas en el color indicado en la misma.
 */
export class List {

    private listaNotas: string[] = [];
    private ruta: string = "";


    /**
     * Constructor de la clase List.
     * @param usuario Usuario dueño de la/las nota/s.
     */
    constructor(usuario: string){

        try {
            this.ruta = "./src/ejercicio3/bbdd/" + usuario;
            this.comprobarNotas();
        }
        catch(err){

            new Print(`ERROR: El usuario ${usuario} no tiene notas.`).printRojo();
        }
    }


    /**
     * Método comprobarNotas. Se lee el directorio del usuario y se almacenan en un array
     * los títulos de las notas. Se comprueba si el array está vacío, lo que indicaría que
     * el usuario no tiene notas, y en caso contrario, se comprobará el color que se indica 
     * en la nota y se mostrará por la terminal el título con el color específico.
     */
    comprobarNotas(){

        readdirSync(this.ruta).forEach(nota => {
            this.listaNotas.push(nota);
        });

        if (this.listaNotas.length == 0){
            throw "ERROR: El usuario no tiene notas.";
        }
        else{
            new Print("Tiene las siguientes notas: ").printVerde();
            this.listaNotas.forEach(nota => {
                const datos = readFileSync(`${this.ruta}/${nota}`).toString();
                if (datos.includes(`"color": "rojo"`)){
                    new Print(`${nota}`).printRojo();
                }
                else if (datos.includes(`"color": "azul"`)){
                    new Print(`${nota}`).printAzul();
                }
                else if (datos.includes(`"color": "verde"`)){
                    new Print(`${nota}`).printVerde();
                }
                else if (datos.includes(`"color": "amarillo"`)){
                    new Print(`${nota}`).printAmarillo();
                }
            });
        }
    }
}