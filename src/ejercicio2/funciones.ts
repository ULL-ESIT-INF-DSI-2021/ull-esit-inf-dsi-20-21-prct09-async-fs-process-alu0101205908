import {spawn} from 'child_process';
import { ChildProcessWithoutNullStreams} from 'node:child_process';


/**
 * Función para comprobar el número de líneas, palabras y caracteres de un fichero.
 * @param fichero Ruta del fichero a comprobar.
 * @param metodo Método que se desea utilizar.
 * @param modo Modo que se aplicará (1, 2, 3 o *)
 */
export function tratamientoFicheros(fichero: string, metodo: number, modo: string){

    if (metodo == 1){
        const wc:ChildProcessWithoutNullStreams = spawn('wc', [fichero]);
        let wcOutput:string = '';
        wc.stdout.on('data', (piece) => wcOutput += piece);
        console.log(fichero, metodo, modo);

        wc.on('close', () => {
            const wcOutputAsArray: string[] = wcOutput.split(/\s+/);
            if (modo == "1"){
                console.log(`El fichero tiene ${wcOutputAsArray[1]} líneas`);
            }
            else if (modo == "2"){
                console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
            }
            else if (modo == "3"){
                console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
            }
            else if (modo = "*") {
                console.log(`El fichero tiene ${wcOutputAsArray[1]} líneas`);
                console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
                console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
            }
        });   
    }
    else if (metodo == 0){
        const cat = spawn('cat', [fichero]);
        const wcLineas = spawn('wc', ['-l']);
        const wcPalabras = spawn('wc', ['-w']);
        const wcCaracteres = spawn('wc', ['-c']);
        cat.stdout.pipe(wcLineas.stdin);
        cat.stdout.pipe(wcPalabras.stdin);
        cat.stdout.pipe(wcCaracteres.stdin);

        if (modo == "1"){
            wcLineas.stdout.on('data', (lineas) => {
                console.log(`El número de líneas es: ${lineas}`);
            });
        }
        else if (modo == "2"){
            wcPalabras.stdout.on('data', (palabras) => {
                console.log(`El número de palabras es: ${palabras}`);
            });
        }
        else if (modo == "3"){
            wcCaracteres.stdout.on('data', (caracteres) => {
                console.log(`El número de caracteres es: ${caracteres}`);
            });
        }
        else if (modo = "*") {
            wcLineas.stdout.on('data', (lineas) => {
                console.log(`El número de líneas es: ${lineas}`);
            });

            wcPalabras.stdout.on('data', (palabras) => {
                console.log(`El número de palabras es: ${palabras}`);
            });

            wcCaracteres.stdout.on('data', (caracteres) => {
                console.log(`El número de caracteres es: ${caracteres}`);
            });
        }
    }
}