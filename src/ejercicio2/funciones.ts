import {spawn} from 'child_process';
import { ChildProcessWithoutNullStreams } from 'node:child_process';

export function tratamientoFicheros(fichero: string, metodo: number, modo: string){

    const wc:ChildProcessWithoutNullStreams = spawn('wc', [fichero]);

    let wcOutput:string = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);
    console.log(fichero, metodo, modo)
    wc.on('close', () => {
        const wcOutputAsArray: string[] = wcOutput.split(/\s+/);
        if (metodo == 1){
            if (modo == "1"){
                console.log(`El fichero tiene ${wcOutputAsArray[1]+1} líneas`);
            }
            else if (modo == "2"){
                console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
            }
            else if (modo == "3"){
                console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
            }
            else if (modo = "*") {
                console.log(`El fichero tiene ${wcOutputAsArray[1]+1} líneas`);
                console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
                console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
            }
        }
        else if (metodo == 0){
            const lineas = wcOutputAsArray[1]
            const palabras = wcOutputAsArray[2]
            const caracteres = wcOutputAsArray[3]
            if (modo == "1"){
                spawn('echo', [`El fichero tiene ${lineas} líneas`]).stdout.pipe(process.stdout);
            }
            else if (modo == "2"){
                spawn('echo', [`El fichero tiene ${palabras} palabras`]).stdout.pipe(process.stdout);
            }
            else if (modo == "3"){
                spawn('echo', [`El fichero tiene ${caracteres} caracteres`]).stdout.pipe(process.stdout);
            }
            else if (modo = "*") {
                spawn('echo', [`El fichero tiene ${lineas} líneas`]).stdout.pipe(process.stdout);
                spawn('echo', [`El fichero tiene ${palabras} palabras`]).stdout.pipe(process.stdout);
                spawn('echo', [`El fichero tiene ${caracteres} caracteres`]).stdout.pipe(process.stdout);
            }
        }
    });
}