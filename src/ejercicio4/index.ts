import * as f from './funciones'
const yargs = require('yargs');

/**
 * Comando --add: Sirve añadir una nota.
 * OPCIONES: --usuario="nombre usuario" --titulo="titulo de la nota" --texto="texto de la nota" --color="color de la nota"
 */
yargs.command("1", 'Indicar si es un directorio o un fichero', {
    ruta: {
        describe: 'Ruta a comprobar',
        demandOption: true,
        type: 'string',
    }
});


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


yargs.command("3", 'Lista los ficheros de un directorio dada una ruta', {
    ruta: {
        describe: 'Ruta a hacer el ls',
        demandOption: true,
        type: 'string',
    }
});


yargs.command("4", 'Mostrar el contenido de un fichero', {
    ruta: {
        describe: 'Ruta del fichero para hacer el cat',
        demandOption: true,
        type: 'string',
    }
});


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

    
}
else{
    console.log("¡Comando inexistente!");
}