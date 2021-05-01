"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function tratamientoFicheros(fichero, metodo, modo) {
    if (metodo == 1) {
        const wc = child_process_1.spawn('wc', [fichero]);
        let wcOutput = '';
        wc.stdout.on('data', (piece) => wcOutput += piece);
        console.log(fichero, metodo, modo);
        wc.on('close', () => {
            const wcOutputAsArray = wcOutput.split(/\s+/);
            if (modo == "1") {
                console.log(`El fichero tiene ${wcOutputAsArray[1]} líneas`);
            }
            else if (modo == "2") {
                console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
            }
            else if (modo == "3") {
                console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
            }
            else if (modo = "*") {
                console.log(`El fichero tiene ${wcOutputAsArray[1]} líneas`);
                console.log(`El fichero tiene ${wcOutputAsArray[2]} palabras`);
                console.log(`El fichero tiene ${wcOutputAsArray[3]} caracteres`);
            }
        });
    }
    else if (metodo == 0) {
        const cat = child_process_1.spawn('cat', [fichero]);
        const wcLineas = child_process_1.spawn('wc', ['-l']);
        const wcPalabras = child_process_1.spawn('wc', ['-w']);
        const wcCaracteres = child_process_1.spawn('wc', ['-c']);
        cat.stdout.pipe(wcLineas.stdin);
        cat.stdout.pipe(wcPalabras.stdin);
        cat.stdout.pipe(wcCaracteres.stdin);
        if (modo == "1") {
            wcLineas.stdout.on('data', (lineas) => {
                console.log(`El número de líneas es: ${lineas}`);
            });
        }
        else if (modo == "2") {
            wcPalabras.stdout.on('data', (palabras) => {
                console.log(`El número de palabras es: ${palabras}`);
            });
        }
        else if (modo == "3") {
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
exports.tratamientoFicheros = tratamientoFicheros;
