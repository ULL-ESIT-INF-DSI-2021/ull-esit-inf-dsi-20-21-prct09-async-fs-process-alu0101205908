"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operacionAdd_1 = require("./principal/operacionAdd");
const operacionList_1 = require("./principal/operacionList");
const operacionRemove_1 = require("./principal/operacionRemove");
const operacionRead_1 = require("./principal/operacionRead");
const operacionModify_1 = require("./principal/operacionModify");
const print_1 = require("./print/print");
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
if (comando == "add") {
    new operacionAdd_1.Add(argv.usuario, argv.titulo, argv.texto, argv.color);
}
else if (comando == "list") {
    new operacionList_1.List(argv.usuario);
}
else if (comando == "read") {
    new operacionRead_1.Read(argv.usuario, argv.titulo);
}
else if (comando == "remove") {
    new operacionRemove_1.Remove(argv.usuario, argv.titulo);
}
else if (comando == "modify") {
    new operacionModify_1.Modify(argv.usuario, argv.titulo, argv.texto, argv.color);
}
else {
    new print_1.Print("¡Comando inexistente!").printRojo();
}
