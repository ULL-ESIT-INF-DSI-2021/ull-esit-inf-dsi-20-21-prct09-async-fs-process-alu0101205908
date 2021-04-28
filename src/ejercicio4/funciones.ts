import { readdirSync } from 'fs';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { opendirSync, readFileSync } from 'fs';


export function func1(ruta: string){

    const ls:ChildProcessWithoutNullStreams = spawn('ls', ['-la', ruta]);
    let lsOutput:string = '';
    ls.stdout.on('data', (piece) => lsOutput += piece);
    ls.on('close', () => {
        const lsOutputAsArray: string[] = lsOutput.split("");
        if (lsOutputAsArray.length == 0){
            console.log("ES UN FICHERO O UN DIRECTORIO NO EXISTENTE")
        }
        else{
            console.log("ES UN DIRECTORIO")
        }
    });

}


export function func2(ruta: string, directorio: string){

    try {
        opendirSync(ruta);
        const mkdir:ChildProcessWithoutNullStreams = spawn('mkdir', [ruta + directorio]);
    }
    catch(err){
        console.log("ES UN FICHERO O UN DIRECTORIO NO EXISTENTE")
    }
}


export function func3(ruta: string){

    try {
        readdirSync(ruta)
        const ls:ChildProcessWithoutNullStreams = spawn('ls', [ruta]);
        console.log("El contenido del directorio es: ")
        ls.stdout.pipe(process.stdout)
        let lsOutput:string = '';
        ls.stdout.on('data', (piece) => lsOutput += piece);
        ls.on('close', () => {
            const lsOutputAsArray: string[] = lsOutput.split("");
            if (lsOutputAsArray.length == 0){
                console.log("ES UN FICHERO O UN DIRECTORIO NO EXISTENTE")
            }
        });
    }
    catch(err){
        console.log("NO ES UN DIRECTORIO VÁLIDO");
    }
}


export function func4(ruta: string){

    try {
        readFileSync(ruta)
        const ls:ChildProcessWithoutNullStreams = spawn('cat', [ruta]);
        console.log("El contenido del fichero es: ");
        ls.stdout.pipe(process.stdout);
    }
    catch(err){
        console.log("NO SE PUEDE ABRIR EL FICHERO O NO EXISTE");
    }
}


export function func5(ruta: string, modo: number){

    if (modo == 0){
        try {
            opendirSync(ruta)
            const ls:ChildProcessWithoutNullStreams = spawn('rmdir', [ruta]);
        }
        catch(err){
            console.log("NO SE PUEDE BORRAR EL DIRECTORIO PORQUE NO EXISTE");
        }
    }
    else if (modo == 1){
        try {
            readFileSync(ruta)
            const ls:ChildProcessWithoutNullStreams = spawn('rm', [ruta]);
        }
        catch(err){
            console.log("NO SE PUEDE BORRAR EL FICHERO PORQUE NO EXISTE");
        }
    }
}