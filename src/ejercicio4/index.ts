import * as f from './funciones'
const yargs = require('yargs');

/**
 * Comando --1: Método para comprobar si la ruta dada es un fichero o un directorio.
 * OPCIONES: --ruta="ruta del directorio | fichero"
 */
yargs.command("1", 'Indicar si es un directorio o un fichero', {
    ruta: {
        describe: 'Ruta a comprobar',
        demandOption: true,
        type: 'string',
    }
});


/**
 * Comando --2: Método para crear un directorio.
 * OPCIONES: --ruta="ruta donde crear el directorio" --directorio="nombre del directorio a crear"
 */
yargs.command("2", 'Crea un directorio dada una ruta', {
    ruta: {
        describe: 'Ruta donde crear el nuevo directorio',
        demandOption: true,
        type: 'string',
    },
    directorio: {
        describe: 'Nombre del nuevo directorio a crear',
        demandOption: true,
        type: 'string',
    }
});


/**
 * Comando --3: Método para listar el contenido de un directorio.
 * OPCIONES: --ruta="ruta del directorio a listar"
 */
yargs.command("3", 'Lista los ficheros de un directorio dada una ruta', {
    ruta: {
        describe: 'Ruta a hacer el ls',
        demandOption: true,
        type: 'string',
    }
});


/**
 * Comando --4: Método para mostar el contenido de un fichero.
 * OPCIONES: --ruta="ruta del fichero a mostrar"
 */
yargs.command("4", 'Mostrar el contenido de un fichero', {
    ruta: {
        describe: 'Ruta del fichero para hacer el cat',
        demandOption: true,
        type: 'string',
    }
});


/**
 * Comando --5: Método para borrar directorios y ficheros.
 * OPCIONES: --ruta="ruta del fichero | fichero a borrar" --modo="Si es un fichero (1) | si es un directorio (0)"
 */
yargs.command("5", 'Borrar ficheros o directorios', {
    ruta: {
        describe: 'Ruta del fichero o directorio a borrar',
        demandOption: true,
        type: 'string',
    },
    modo: {
        describe: 'Borrar fichero (1) borrar directorio (0)',
        demandOption: true,
        type: 'number',
    }
});


/**
 * Comando --6: Método para copiar directorios y ficheros.
 * OPCIONES: --rutaOrigen="ruta del fichero | fichero a copiar" ----rutaOrigen="ruta del fichero | fichero donde se copiará" --modo="Si es un fichero (1) | si es un directorio (0)"
 */
yargs.command("6", 'Mover y copiar directorios y ficheros', {
    rutaOrigen: {
        describe: 'Ruta del fichero o directorio a copiar/mover',
        demandOption: true,
        type: 'string',
    },
    rutaDestino: {
        describe: 'Ruta de destino',
        demandOption: true,
        type: 'string',
    },
    modo: {
        describe: 'Mover/Copiar fichero (1) Mover/Copiar directorio (0)',
        demandOption: true,
        type: 'number',
    }
});


yargs.help();
yargs.alias("help", "h");

const argv = yargs.argv;
const comando = argv._[0];


if (comando == "1"){
    
    f.func1(argv.ruta);
}
else if (comando == "2"){

    f.func2(argv.ruta, argv.directorio);
}
else if (comando == "3"){

    f.func3(argv.ruta);
}
else if (comando == "4"){

    f.func4(argv.ruta);
}
else if (comando == "5"){

    f.func5(argv.ruta, argv.modo);
}
else if (comando == "6"){

     f.func6(argv.rutaOrigen, argv.rutaDestino, argv.modo);
}
else{
    console.log("¡Comando inexistente!");
}