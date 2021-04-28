import { Add } from "./principal/operacionAdd";
import { List } from "./principal/operacionList";
import { Remove } from "./principal/operacionRemove";
import { Read } from "./principal/operacionRead";
import { Modify } from "./principal/operacionModify";
import { Print } from "./print/print";


const yargs = require('yargs');

/**
 * Comando --add: Sirve añadir una nota.
 * OPCIONES: --usuario="nombre usuario" --titulo="titulo de la nota" --texto="texto de la nota" --color="color de la nota"
 */
yargs.command("add", 'Añadir una nueva nota', {
    usuario: {
        describe: 'Usuario dueño de la nota',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota',
        demandOption: true,
        type: 'string',
    },
    texto: {
        describe: 'Cuerpo de la nota',
        demandOption: true,
        type: 'string',
    },
    color: {
        describe: 'Color de la nota',
        demandOption: true,
        type: 'string',
    },
});


/**
 * Comando --list: Sirve para listar las notas de un usuario dado.
 * OPCIONES: --usuario="nombre usuario"
 */
yargs.command("list", "Listar las notas de un usuario", {
    usuario: {
        describe: 'Usuario a listar las notas',
        demandOption: true,
        type: 'string',
    }
});


/**
 * Comando --read: Sirve para leer la nota de un usuario y titulo dados.
 * OPCIONES: --usuario="nombre usuario" --titulo="titulo de la nota"
 */
yargs.command("read", "Leer nota de un usuario", {
    usuario: {
        describe: 'Usuario dueño de la nota a leer',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota a leer',
        demandOption: true,
        type: 'string',
    },
});


/**
 * Comando --remove: Sirve para borrar la nota de un usuario y titulo dados.
 * OPCIONES: --usuario="nombre usuario" --titulo="titulo de la nota"
 */
yargs.command("remove", "Borrar nota de un usuario", {
    usuario: {
        describe: 'Usuario dueño de la nota a borrar',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota a borrar',
        demandOption: true,
        type: 'string',
    },
});


/**
 * Comando --modify: Sirve para modificar una nota.
 * OPCIONES: --usuario="nombre usuario" --titulo="titulo de la nota" --texto="texto de la nota" --color="color de la nota"
 */
 yargs.command("modify", 'Modificar una nueva nota', {
    usuario: {
        describe: 'Usuario dueño de la nota',
        demandOption: true,
        type: 'string',
    },
    titulo: {
        describe: 'Titulo de la nota',
        demandOption: true,
        type: 'string',
    },
    texto: {
        describe: 'Cuerpo de la nota',
        demandOption: true,
        type: 'string',
    },
    color: {
        describe: 'Color de la nota',
        demandOption: true,
        type: 'string',
    },
});


yargs.help();
yargs.alias("help", "h");


const argv = yargs.argv;
const comando = argv._[0];


if (comando == "add"){
    new Add(argv.usuario, argv.titulo, argv.texto, argv.color);
}
else if (comando == "list"){

    new List(argv.usuario);
}
else if (comando == "read"){

    new Read(argv.usuario, argv.titulo);
}
else if (comando == "remove"){

    new Remove(argv.usuario, argv.titulo);
}
else if (comando == "modify"){

    new Modify(argv.usuario, argv.titulo, argv.texto, argv.color);
}
else{
    new Print("¡Comando inexistente!").printRojo();
}