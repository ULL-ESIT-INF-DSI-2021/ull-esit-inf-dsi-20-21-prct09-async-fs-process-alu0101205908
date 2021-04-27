"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
if (process.argv.length !== 3) {
    console.log('Please, specify a file');
}
else {
    const filename = process.argv[2];
    console.log("2");
    fs_1.access(filename, fs_1.constants.F_OK, (err) => {
        if (err) {
            console.log(`File ${filename} does not exist`);
        }
        else {
            console.log(`Starting to watch file ${filename}`);
            const watcher = fs_1.watch(process.argv[2]);
            watcher.on('change', () => {
                console.log(`File ${filename} has been modified somehow`);
            });
            console.log(`File ${filename} is no longer watched`);
        }
    });
    console.log("Borjaaa");
}
/*
Pila de llamadas:

|               |
|               |
|               |
|               | --> Inicio: La pila de llamadas está vacía
|               |
-----------------

|               |
|               |
|               |  --> Cuando se ejecuta un script en Node, este se envuelve en un main
|               |      Se introduce main en la pila
|  main         |
-----------------

|               |
|               |
|               |
|  access       | --> Se introduce en la pila access
|  main         |
-----------------

|               |
|               |
|               |
|               | --> Se saca access de la pila y se lleva a los registro de la API
|  main         |
-----------------

************* E V E N T O S   A P I **************
|
|
| access                                            --> Se registra un nuevo evento, access
**************************************************

----------- C O L A --------------
|
|
| access                            --> Se introduce access en la cola de manejadores
----------------------------------

|               |
|               |
|               |
|  console.log()| --> Se introduce console.log(`Starting to watch file holaMundo.txt`);
|  main         |
-----------------
*/ 
