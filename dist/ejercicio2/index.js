"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function tratamientoFicheros(pipe, fichero) {
    const wc = child_process_1.spawn('wc', [fichero]);
    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);
    wc.on('close', () => {
        const wcOutputAsArray = wcOutput.split(/\s+/);
        if (pipe == 1) {
            console.log(`El fichero tiene ${wcOutputAsArray[1]} líneas`);
            console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
            console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
        }
        else if (pipe == 0) {
            const lineas = wcOutputAsArray[1];
            const palabras = wcOutputAsArray[2];
            const caracteres = wcOutputAsArray[3];
            child_process_1.spawn('echo', [`El fichero tiene ${lineas} líneas`]).stdout.pipe(process.stdout);
            child_process_1.spawn('echo', [`El fichero tiene ${palabras} palabras`]).stdout.pipe(process.stdout);
            child_process_1.spawn('echo', [`El fichero tiene ${caracteres} caracteres`]).stdout.pipe(process.stdout);
        }
    });
}
try {
    if (parseInt(process.argv[3]) != 0 && parseInt(process.argv[3]) != 1) {
        throw "ERROR: Incluya como parámetro si utilizará la aplicación con pipe (1) o no (0)";
    }
}
catch (err) {
    console.log(err);
}
try {
    if (!open(process.argv[2])) {
        throw "ERROR: Incluya como parámetro si utilizará la aplicación con pipe (1) o no (0)";
    }
}
catch (err) {
    console.log(err);
}
tratamientoFicheros(parseInt(process.argv[3]), process.argv[2]);
