import {spawn} from 'child_process';
import { ChildProcessWithoutNullStreams } from 'node:child_process';

function tratamientoFicheros(pipe: number, fichero: string){

    const wc:ChildProcessWithoutNullStreams = spawn('wc', [fichero]);

    let wcOutput:string = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);

    wc.on('close', () => {
        const wcOutputAsArray: string[] = wcOutput.split(/\s+/);
        if (pipe == 1){
            console.log(`El fichero tiene ${wcOutputAsArray[1]} líneas`);
            console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
            console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
        }
        else if (pipe == 0){
            const lineas = wcOutputAsArray[1]
            const palabras = wcOutputAsArray[2]
            const caracteres = wcOutputAsArray[3]
            spawn('echo', [`El fichero tiene ${lineas} líneas`]).stdout.pipe(process.stdout)
            spawn('echo', [`El fichero tiene ${palabras} palabras`]).stdout.pipe(process.stdout)
            spawn('echo', [`El fichero tiene ${caracteres} caracteres`]).stdout.pipe(process.stdout)
        }
    });
}


tratamientoFicheros(parseInt(process.argv[3]), process.argv[2]);