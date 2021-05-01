"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const f = __importStar(require("./funciones"));
const yargs = require('yargs');
/**
 * Comando --info: Sirve añadir una nota.
 * OPCIONES: --ruta="ruta del fichero" --metodo="metodo a utilizar" --modo="modo a mostrar"
 */
yargs.command("info", 'Añadir una nueva nota', {
    ruta: {
        describe: 'Ruta del fichero',
        demandOption: true,
        type: 'string',
    },
    metodo: {
        describe: 'Método que quiere utilizar: mediante pipe (1) o mediante subprocesos (0)',
        demandOption: true,
        type: 'string',
    },
    modo: {
        describe: 'Modo en que quiere mostrar la informacion. Solo líneas (1), solo palabras (2), solo caracteres (3), toda la información(*)',
        demandOption: true,
        type: 'string',
    }
});
yargs.help();
yargs.alias("help", "h");
const argv = yargs.argv;
const comando = argv._[0];
if (comando == "info") {
    f.tratamientoFicheros(argv.ruta, parseInt(argv.metodo), argv.modo);
}
