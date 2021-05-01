import {access, constants, watch} from 'fs';

if (process.argv.length !== 3) {
  console.log('Please, specify a file');
} else {
  const filename = process.argv[2];

  console.log("2")

  access(filename, constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${filename} does not exist`);
    } else {
      console.log(`Starting to watch file ${filename}`);

      const watcher = watch(process.argv[2]);

      watcher.on('change', () => {
        console.log(`File ${filename} has been modified somehow`);
      });

      console.log(`File ${filename} is no longer watched`);
    }
  });
}

/*


|               |
|               |
|               |
|               | --> Inicio: La pila de llamadas está vacía.
|               |
-----------------


|               |
|               |
|               |  --> Cuando se ejecuta un script en Node, este se envuelve en un main.
|               |      Se introduce main en la pila.
|  main         |
-----------------


|               |
|               |
|               |  
|  access       | --> Se introduce access en la pila.
|  main         |
-----------------


|               |
|               |
|               |  
|               | --> Se saca access de la pila y se lleva a los registro de la API
|  main         |
-----------------


|               |
|               |
|               |  
|               | --> Se saca main de la pila.
|               |
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
|               |  
| { access }    | --> Se introduce el manejador de access en la pila
-----------------


|               |
|               |
|               |
|               |  
|  console.log()| --> Del manejador de access entra --> console.log()
| { access }    |
-----------------


SALIDA: `Starting to watch file helloworld.txt`


|               |
|               |
|               |
|               |  --> Sale el console.log()
|               | 
| { access }    |
-----------------


|               |
|               |
|               |
|               |  
|  watch        | --> Del manejador de access entra --> watch
| { access }    |
-----------------


|               |
|               |
|               |
|               |  
|               | --> Se saca watch de la pila y se ejecuta.
| { access }    |
-----------------


|               |
|               |
|               |
|               |  
|  watcher.on   | --> Del manejador de access entra --> watcher.on
| { access }    |
-----------------


|               |
|               |
|               |
|               |  
|               | --> Se saca watcher.on de la pila
| { access }    |
-----------------


************* E V E N T O S   A P I **************
|
|
| watcher.on                                           --> Se registra un nuevo evento, watcher.on                                          
**************************************************


|               |
|               |
|               |
|               |
|               |  
|               | --> Se saca el manejador de access de la pila
-----------------


** Hacemos un cambio en el fichero (watcher.on esperando a que haya un cambio (change))** 


----------- C O L A --------------
|
|   
| { watcher.on }                        --> Se introduce en la cola el manejador de watcher.on
----------------------------------


|               |
|               |
|               |
|               |
| console.log() |  --> Del manejador de on entra --> console.log()
-----------------


SALIDA: `File helloworld.txt has been modified somehow`


|               |
|               |
|               |
|               |
|               |  --> Se saca console.log()
-----------------


** Hacemos un cambio en el fichero (watcher.on esperando a que haya un cambio (change))** 


----------- C O L A --------------
|
|   
| { watcher.on }                        --> Se introduce en la cola el manejador de watcher.on
----------------------------------


|               |
|               |
|               |
|               |
| console.log() |  --> Del manejador de on entra --> console.log()
-----------------


SALIDA: `File helloworld.txt has been modified somehow`


|               |
|               |
|               |
|               |
|               |  --> Se saca console.log()
-----------------

FINALIZAMOS LA EJECUCIÓN (Crtl C):


************* E V E N T O S   A P I **************
|
|
|                                                      --> Se saca el evento watcher.on del registro                                          
**************************************************
*/