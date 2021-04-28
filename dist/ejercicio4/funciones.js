"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const fs_2 = require("fs");
function func1(ruta) {
    const ls = child_process_1.spawn('ls', ['-la', ruta]);
    let lsOutput = '';
    ls.stdout.on('data', (piece) => lsOutput += piece);
    ls.on('close', () => {
        const lsOutputAsArray = lsOutput.split("");
        if (lsOutputAsArray.length == 0) {
            console.log("ES UN FICHERO O UN DIRECTORIO NO EXISTENTE");
        }
        else {
            console.log("ES UN DIRECTORIO");
        }
    });
}
exports.func1 = func1;
function func2(ruta, directorio) {
    try {
        fs_2.opendirSync(ruta);
        const mkdir = child_process_1.spawn('mkdir', [ruta + directorio]);
    }
    catch (err) {
        console.log("ES UN FICHERO O UN DIRECTORIO NO EXISTENTE");
    }
}
exports.func2 = func2;
function func3(ruta) {
    try {
        fs_1.readdirSync(ruta);
        const ls = child_process_1.spawn('ls', [ruta]);
        console.log("El contenido del directorio es: ");
        ls.stdout.pipe(process.stdout);
        let lsOutput = '';
        ls.stdout.on('data', (piece) => lsOutput += piece);
        ls.on('close', () => {
            const lsOutputAsArray = lsOutput.split("");
            if (lsOutputAsArray.length == 0) {
                console.log("ES UN FICHERO O UN DIRECTORIO NO EXISTENTE");
            }
        });
    }
    catch (err) {
        console.log("NO ES UN DIRECTORIO VÁLIDO");
    }
}
exports.func3 = func3;
function func4(ruta) {
    try {
        fs_2.readFileSync(ruta);
        const ls = child_process_1.spawn('cat', [ruta]);
        console.log("El contenido del fichero es: ");
        ls.stdout.pipe(process.stdout);
    }
    catch (err) {
        console.log("NO SE PUEDE ABRIR EL FICHERO O NO EXISTE");
    }
}
exports.func4 = func4;
function func5(ruta, modo) {
    if (modo == 0) {
        try {
            fs_2.opendirSync(ruta);
            const ls = child_process_1.spawn('rmdir', [ruta]);
        }
        catch (err) {
            console.log("NO SE PUEDE BORRAR EL DIRECTORIO PORQUE NO EXISTE");
        }
    }
    else if (modo == 1) {
        try {
            fs_2.readFileSync(ruta);
            const ls = child_process_1.spawn('rm', [ruta]);
        }
        catch (err) {
            console.log("NO SE PUEDE BORRAR EL FICHERO PORQUE NO EXISTE");
        }
    }
}
exports.func5 = func5;
