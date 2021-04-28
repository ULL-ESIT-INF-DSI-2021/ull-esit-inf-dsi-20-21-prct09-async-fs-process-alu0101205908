const chalk = require('chalk');


/**
 * Clase Print. Clase utilizada para colorear los mensajes. Tiene 4 métodos (uno para cada color
 * rojo, azul, verde y azul) y utiliza la librería chalk para realizar el pintado.
 */
export class Print {


    /**
     * Constructor de la clase Print. Recibe como parámetro el mensaje a colorear
     * @param mensaje Mensaje para mostrar
     */
    constructor(private mensaje: string){}


    /**
     * Método printRojo. Utilizado para colorear el mensaje en rojo.
     * @returns Retorna 1, para indicar que se ha detectado errores donde se invoque.
     */
    printRojo(){
        console.log(chalk.red(`${this.mensaje}`));
        return 1;
    }


    /**
     * Método printAzul. Utilizado para colorear el mensaje en azul.
     */
    printAzul(){
        console.log(chalk.blue(`${this.mensaje}`));
    }

    
    /**
     * Método printVerde. Utilizado para colorear el mensaje en verde.
     * @returns Retorna 0, para indicar la no detección de errores donde se invoque.
     */
    printVerde(){
        console.log(chalk.green(`${this.mensaje}`));
        return 0;
    }


    /**
     * Método printAmarillo. Utilizado para colorear el mensaje en amarillo.
     */
    printAmarillo(){
        console.log(chalk.yellow(`${this.mensaje}`));
    }
}