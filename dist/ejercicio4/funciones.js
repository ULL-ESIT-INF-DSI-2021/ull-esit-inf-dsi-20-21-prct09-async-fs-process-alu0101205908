"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
function func1(ruta) {
    const ls = child_process_1.spawn('ls', ['-la', ruta]);
    const cut = child_process_1.spawn('cut', ['-c1']);
    ls.stdout.pipe(cut.stdin);
    let arrayString = "";
    cut.stdout.on('data', (lineas) => {
        arrayString = lineas.toString();
        if (arrayString[0] == "-") {
            console.log("Es un fichero");
        }
        else if (arrayString[0] == "t") {
            console.log("Es un directorio");
        }
    });
}
exports.func1 = func1;
function func2(ruta, directorio) {
    fs_1.access(ruta, fs_1.constants.F_OK, (err) => {
        if (err) {
            console.log("No se puede acceder al directorio, no existe.");
        }
        else {
            child_process_1.spawn('mkdir', [ruta + directorio]);
        }
    });
}
exports.func2 = func2;
function func3(ruta) {
    fs_1.access(ruta, fs_1.constants.F_OK, (err) => {
        if (err) {
            console.log("No se puede listar el directorio, no existe.");
        }
        else {
            child_process_1.spawn('ls', [ruta]).stdout.pipe(process.stdout);
        }
    });
}
exports.func3 = func3;
function func4(ruta) {
    fs_1.access(ruta, fs_1.constants.R_OK, (err) => {
        if (err) {
            console.log("No se puede mostrar el contenido del fichero, no existe.");
        }
        else {
            child_process_1.spawn('cat', [ruta]).stdout.pipe(process.stdout);
        }
    });
}
exports.func4 = func4;
function func5(ruta, modo) {
    if (modo == 0) {
        fs_1.access(ruta, fs_1.constants.F_OK, (err) => {
            if (err) {
                console.log("No se puede borrar el directorio, no existe.");
            }
            else {
                child_process_1.spawn('rmdir', [ruta]);
            }
        });
    }
    else if (modo == 1) {
        fs_1.access(ruta, fs_1.constants.R_OK, (err) => {
            if (err) {
                console.log("No se puede borrar el fichero, no existe.");
            }
            else {
                child_process_1.spawn('rm', [ruta]);
            }
        });
    }
}
exports.func5 = func5;
function func6(rutaOrigen, rutaDestino, modo) {
    if (modo == 0) {
        fs_1.access(rutaOrigen, fs_1.constants.F_OK, (err) => {
            if (err) {
                console.log(`No se puede acceder al directorio ${rutaOrigen}, no existe.`);
            }
            else {
                const mv = child_process_1.spawn('mv', [rutaOrigen, rutaDestino]);
            }
        });
    }
    else if (modo == 1) {
        fs_1.access(rutaOrigen, fs_1.constants.R_OK, (err) => {
            if (err) {
                console.log(`No se puede acceder al fichero ${rutaOrigen}, no existe.`);
            }
            else {
                const mv = child_process_1.spawn('mv', [rutaOrigen, rutaDestino]);
            }
        });
    }
}
exports.func6 = func6;
