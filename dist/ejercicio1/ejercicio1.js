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


************* E V E N T O S   A P I **************
|
|
|                                                    --> Se saca el evento access y el manejador pasa a la cola
**************************************************


----------- C O L A --------------
|
|
| { access }                          --> Se introduce en la cola el manejador de access
----------------------------------


----------- C O L A --------------
|
|
|                                  --> Se saca el manejador de access de la cola
----------------------------------


|               |
|               |
|               |
| { access }    | --> Se introduce el manejador de access en la pila
|  main         |
-----------------


|               |
|               |
|               |
|  console.log()| --> Del manejador de access entra --> console.log()
| { access }    |
|  main         |
-----------------


SALIDA: `Starting to watch file helloworld.txt`


|               |
|               |
|               |  --> Sale el console.log()
|               |
| { access }    |
|  main         |
-----------------


|               |
|               |
|               |
|  watch        | --> Del manejador de access entra --> watch
| { access }    |
|  main         |
-----------------


|               |
|               |
|               |
|               | --> Se saca watch de la pila y va al registro de eventos
| { access }    |
|  main         |
-----------------


************* E V E N T O S   A P I **************
|
|
| watch                                              --> Se registra un nuevo evento, watch
**************************************************


************* E V E N T O S   A P I **************
|
|
|                                                    --> Se saca el registro watch
**************************************************


|               |
|               |
|               |
|  console.log()| --> Del manejador de access entra --> console.log()
| { access }    |
|  main         |
-----------------


SALIDA: `File helloworld.txt is no longer watched`


|               |
|               |
|               |  --> Sale el console.log()
|               |
| { access }    |
|  main         |
-----------------


|               |
|               |
|               |
|  on           | --> Del manejador de access entra --> on
| { access }    |
|  main         |
-----------------


|               |
|               |
|               |
|               | --> Se saca on de la pila
| { access }    |
|  main         |
-----------------


************* E V E N T O S   A P I **************
|
|
| on                                                 --> Se registra un nuevo evento, on
**************************************************


** Hacemos un cambio en el fichero **


----------- C O L A --------------
|
|
| { on }                              --> Se introduce en la cola el manejador de on
----------------------------------


|               |
|               |
| console.log() |  --> Del manejador de on entra --> console.log()
| { access }    |
|  main         |
-----------------


SALIDA: `File helloworld.txt has been modified somehow`


|               |
|               |
|               |  --> Se saca console.log()
| { access }    |
|  main         |
-----------------


** Hacemos un cambio en el fichero **


----------- C O L A --------------
|
|
| { on }                              --> Se introduce en la cola el manejador de on
----------------------------------


|               |
|               |
| console.log() |  --> Del manejador de on entra --> console.log()
| { access }    |
|  main         |
-----------------


SALIDA: `File helloworld.txt has been modified somehow`


|               |
|               |
|               |  --> Se saca console.log()
| { access }    |
|  main         |
-----------------

FINALIZAMOS LA EJECUCIÓN:


************* E V E N T O S   A P I **************
|
|
|                                                      --> Se saca el evento on del registro
**************************************************


|               |
|               |
|               |
|               | --> Se saca de la pila el manejador de access
|  main         |
-----------------


|               |
|               |
|               |
|               |
|               |   --> Se saca de la pila main
-----------------
*/ 
