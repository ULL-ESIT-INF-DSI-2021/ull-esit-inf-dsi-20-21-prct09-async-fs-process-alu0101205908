"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const fs_2 = require("fs");
const yargs = require('yargs');
yargs.command("control", 'Control de un directorio', {
    usuario: {
        describe: 'Usuario de la aplicación',
        demandOption: true,
        type: 'string',
    }
});
yargs.help();
yargs.alias("help", "h");
const argv = yargs.argv;
const comando = argv._[0];
if (comando == "control") {
    comprobadorDirectorio(argv.usuario);
}
else {
    console.log("¡Comando inexistente!");
}
function comprobadorDirectorio(usuario) {
    let ruta = "./src/ejercicio3/bbdd/" + usuario;
    let ficheroModificaciones = './src/ejercicio3/bbdd/modificaciones.txt';
    fs_1.access(ruta, fs_1.constants.F_OK, (err) => {
        if (err) {
            console.log(`No se puede acceder al directorio ${ruta}, no existe.`);
        }
        else {
            /*let array: WritableStream[] = [];
            const ls = spawn('ls', [ruta])
            const wc = spawn('wc', ['-l'])
            ls.stdout.pipe(wc.stdin);
            array.push(wc)*/
            let buf1 = Buffer.from(ruta);
            fs_1.watch(ruta, (eventType, filename) => {
                let buf2 = Buffer.from(ruta);
                if (eventType == "rename") {
                    console.log(buf1, buf2);
                    if (buf1.length < buf2.length) {
                        console.log("Se eliminó un fichero");
                    }
                    else {
                        console.log("Se añadió un fichero");
                    }
                    buf1 = buf2;
                }
                console.log(eventType);
                // could be either 'rename' or 'change'. new file event and delete
                // also generally emit 'rename'
                console.log(filename);
            });
        }
    });
}
exports.comprobadorDirectorio = comprobadorDirectorio;
function leerDirectorio(ruta, modificaciones) {
    const ls = child_process_1.spawn('ls', [ruta]);
    let arrayString = "";
    ls.stdout.on('data', (ficheros) => {
        arrayString = ficheros.toString();
    });
    ls.on('close', () => {
        fs_2.writeFile(modificaciones, arrayString, (err) => {
            if (err)
                return console.log("ERROR: Se ha borrado el fichero modificaciones...");
        });
    });
}
function leerFicheros() {
}
