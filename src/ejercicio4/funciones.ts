import { readdirSync } from 'fs';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { opendirSync, readFileSync } from 'fs';
import { access, constants, watch} from 'fs';


export function func1(ruta: string){

    const ls: ChildProcessWithoutNullStreams = spawn('ls', ['-la', ruta]);
    const cut: ChildProcessWithoutNullStreams = spawn('cut', ['-c1']);
    ls.stdout.pipe(cut.stdin);
    let arrayString: string = "";
    cut.stdout.on('data', (lineas) => {
        arrayString = lineas.toString();
        if (arrayString[0] == "-"){
            console.log("Es un fichero");
        }
        else if (arrayString[0] == "t"){
            console.log("Es un directorio");
        }
    });
}


export function func2(ruta: string, directorio: string){

    access(ruta, constants.F_OK, (err) => {
        if (err){
            console.log("No se puede acceder al directorio, no existe.");
        }
        else{
            spawn('mkdir', [ruta + directorio]);
        }
    });
}


export function func3(ruta: string){

    access(ruta, constants.F_OK, (err) => {
        if (err){
            console.log("No se puede listar el directorio, no existe.");
        }
        else{
            spawn('ls', [ruta]).stdout.pipe(process.stdout);
        }
    });
}


export function func4(ruta: string){

    access(ruta, constants.R_OK, (err) => {
        if (err){
            console.log("No se puede mostrar el contenido del fichero, no existe.");
        }
        else{
            spawn('cat', [ruta]).stdout.pipe(process.stdout);
        }
    });
}


export function func5(ruta: string, modo: number){

    if (modo == 0){
        access(ruta, constants.F_OK, (err) => {
            if (err){
                console.log("No se puede borrar el directorio, no existe.");
            }
            else{
                spawn('rmdir', [ruta]);
            } 
        });
    }
    else if (modo == 1){
        access(ruta, constants.R_OK, (err) => {
            if (err){
                console.log("No se puede borrar el fichero, no existe.");
            }
            else{
                spawn('rm', [ruta]);
            } 
        });
    }
}


export function func6(rutaOrigen: string, rutaDestino: string, modo: number){

    if (modo == 0){
        access(rutaOrigen, constants.F_OK, (err) => {
            if (err){
                console.log(`No se puede acceder al directorio ${rutaOrigen}, no existe.`);
            }
            else{
                const mv = spawn('mv', [rutaOrigen, rutaDestino]);
            } 
        });
    }
    else if (modo == 1){
        access(rutaOrigen, constants.R_OK, (err) => {
            if (err){
                console.log(`No se puede acceder al fichero ${rutaOrigen}, no existe.`);
            }
            else{
                const mv = spawn('mv', [rutaOrigen, rutaDestino]);
            } 
        });
    }
}