
/*const logger= require("./Logger/loggerconfg") //LLamar el archivo de configuraciones

//logger.log("Esta es la puerta de entrada al proyecto")
logger.info("Esto es un mensaje informativo")
logger.warn("Esto es una advertencia")
logger.error("Esto es un error")
logger.debug("Esto es un debug")
*/

//Formas de importar y exportar modulos 
//1. CommonJS -- require
//2. Import ES6 -- import

//Importacion usando CommonJS 

// console.log(module) Todos los archivos tienen un objeto "module" con sus paths

//const moduleMath = require("./Modulos/math.js") //Importar funciones de math.js en variable "moduleMath"
//console.log(moduleMath.eleva)
//{factorial,suma}=module.Math; 

const {factorial, suma}=require("./Modulos/math.js") //Solo importamos "factorial" y "suma" desde math.js

const fact = factorial(5) 
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

//Importación usando ES6 (en index-es6.js)

//Instalar axios para hacer llamadas a servicios externos



