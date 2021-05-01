# PRÁCTICA 9: Sistema de ficheros y creación de procesos en Node.js

* En esta novena práctica, se han implementado ls ejecicios que se ha solicitado, utilizando para ello TypeScript como lenguaje, Node.js como entorno de ejecución, la API de file system de node y Visual Studio Code para el desarrollo del proyecto.


## Configuración del entorno de trabajo:

* En primer lugar, se ha creado un nuevo directorio para alojar esta nueva práctica en nuestro directorio de prácticas. Además, creamos un proyecto como vimos en clase de teoría, para ello, lo que se hizo fue lo siguiente:
	
	* Generamos un fichero package.json en la raíz de nuestro proyecto, para gestionar las dependencias.
	
		* **npm init --yes**

	* Generamos un fichero tsconfig.json en la raíz de nuestro proyecto, que va a contener las opciones del compilador de TypeScript.
	
		* **tsc --init**
		* De entre todas las opciones que se ofrecen, solo vamos a descomentar y completar las siguientes:

                      “exclude”: [
		                   “./test”,
		                   “.node_modules”,
		                   “./dist” ],		      
    	              "target": "ES2020",	  
                      "declaration": true, 	  
    	              "outDir": "./dist",	  
    	              "rootDir": "./src",	  
                      "noImplicitAny": true,   	  
                      "strictNullChecks": true,	  
                      "noImplicitReturns": true

	* Se utilizará el paquete watch para detectar los cambios realizados sobre los ficheros con código fuente en TypeScript (los almacenados en el directorio src).
		
		* **npm install --save-dev tsc-watch**
		* En el package.json, añadimos a la sección de script: "start": "tsc-watch --onSuccess \"node dist/index.js\""

	* Se utilizará el paquete typedoc para generar la documentación del proyecto.
		
		* **npm install --save-dev typedoc**
		* Crear el fichero typedoc.json, y añadimos:
		
                {
	                "entryPoints": ["./src"],
	                "out": ["./doc"]
                }
      * En el package.json, añadimos a la sección de script: “doc”: “typedoc”

  * Se utilizará el framework Mocha y la librería de asertos Chai para generar las pertinentes pruebas de desarrollo.
  
    * **npm install --save-dev mocha chai @types/mocha @types/chai ts-node**
    * Crear el fichero .mocharc.json, y añadimos:

          {
	            “extension”: [“ts”],
              “spec”: “tests/**/*.spec.ts”,
              “require”: “ts-node/register”
          }
          
    * Crear el directorio tests, donde se alojarán las pruebas
    * En el package.json, añadimos “test”: “mocha”

  * Se utilizarán las GitHub Actions para realizar la integración continua y la inspección con Sonar Cloud:
    * Instalamos TypeScript como dependencia: npm install --save-dev typescript
    * Añadimos en GitHub Actions el workflow de Node.js y configuramos un workflow para los tests.
    
    * Incluimos en el package.JSON "coverage": "nyc npm test && nyc report --reporter=lcov"
    * En el directorio .github/worflows creamos un workflow para el coveralls y otro para SonarCloud.
    
  * Se crea un fichero .gitignore, para ignorar ciertos directorios o archivos a la hora de hacer el push al GitHub, y un fichero README.md para hacer una breve introducción a la práctica.


## Ejercicio 1:

 * Para este primer ejercicio se solicita que se realice una traza sobre el código facilitado. Se puede ver la traza realizada [aquí](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct09-async-fs-process-alu0101205908/blob/master/src/ejercicio1/ejercicio1.ts).

 * Además, se nos pide que respondamos a dos preguntas:
 	
	* ***¿Qué hace la función access?*** La función access se encarga de comprobar si es posible acceder a la ruta dada, que en este caso será un fichero. 
	
	* ***¿Para qué sirve el objeto constants?*** Las constantes son un tipo de objeto, que sirve para realizar las típicas comprobaciones que se harían en la manipulación de ficheros, como comprobar si existe, si se puede leer, si se puede escribir, etc.

 * El ejemplo de ejecución del código sería:

	![Ejercicio 1][Ejercicio1]


## Ejercicio 2:

 * Para este segundo ejercicio se solicita que se realice una aplicación que nos de información sobre el número de líneas, palabras o caracteres que contiene un fichero de texto. Se le tiene que indicar la ruta del fichero y qué es lo que se quiere visualizar, si el número de líneas, el de palabras, el de caracteres o combinaciones de ellas.

 * Lo que se ha hecho es codificar un comando con la librería yargs, y que ese reciba la ruta, el método que se quiera utilizar y el modo que se quiera mostrar. A su vez se llamará a una función que procesará la petición y devolverá lo solicitado.

 * En caso de que se solicite el método 1, no se podrá hacer uso de las pipes, por lo que se se aplicará el coamando de UNIX wc, obteniendo así el total de líneas, palabras y caracteres total.
 
 * Por otro lado, se aplicará el comando cat sobre el fichero, y la salida se redirigirá a los comandos wc -l (para contar las líneas), wc -w (para contar las palabras) y wc -c (para  contar los caracteres) mediantes pipes.
 
 * Un ejemplo de ejecución del código es:

	![Ejercicio 2][Ejercicio2]
	
## Ejercicio 4:

 * Para este último ejercicio se solicita una aplicación que haga  de wrapper. Para 

 * Lo que se ha hecho es codificar los comandos con la librería yargs, y son los siguientes:
  
	* ***1 --ruta="ruta del directorio | fichero"*** --> Método para comprobar si la ruta dada es un fichero o un directorio.
	* ***2 --ruta="ruta donde crear el directorio" --directorio="nombre del directorio a crear"*** --> Método para crear un directorio.
	* ***3 --ruta="ruta del directorio a listar"*** --> Método para listar el contenido de un directorio.
	* ***4 --ruta="ruta del fichero a mostrar"*** --> Método para mostar el contenido de un fichero.
	* ***5 --ruta="ruta del fichero | fichero a borrar" --modo="Si es un fichero (1) | si es un directorio (0)"*** --> Método para borrar directorios y ficheros.
	* ***6 --rutaOrigen="ruta del fichero | fichero a copiar" --rutaDestino="ruta del fichero | fichero donde se copiará" --modo="Si es un fichero (1) | si es un directorio (0)"*** --> Método para copiar directorios y ficheros.

 * El ejemplo de ejecución del código para el comando 1 sería:

	![Ejercicio 3.1][Ejercicio31]
	
 * El ejemplo de ejecución del código para el comando 1 sería:

	![Ejercicio 3.2][Ejercicio32]
	
* El ejemplo de ejecución del código para el comando 1 sería:

	![Ejercicio 3.3][Ejercicio33]
	
* El ejemplo de ejecución del código para el comando 1 sería:

	![Ejercicio 3.4][Ejercicio34]
	
* El ejemplo de ejecución del código para el comando 1 sería:

	![Ejercicio 3.5][Ejercicio35]
	
* El ejemplo de ejecución del código para el comando 1 sería:

	![Ejercicio 3.6][Ejercicio36]
	
	
[Ejercicio1]: images/ejercicio1.JPG "Ejercicio 1"
[Ejercicio2]: images/ejercicio2.JPG "Ejercicio 2"
[Ejercicio31]: images/ejercicio31.JPG "Ejercicio 31"
[Ejercicio32]: images/ejercicio32.JPG "Ejercicio 32"
[Ejercicio33]: images/ejercicio33.JPG "Ejercicio 33"
[Ejercicio34]: images/ejercicio34.JPG "Ejercicio 34"
[Ejercicio35]: images/ejercicio35.JPG "Ejercicio 35"
[Ejercicio36]: images/ejercicio36.JPG "Ejercicio 36"
