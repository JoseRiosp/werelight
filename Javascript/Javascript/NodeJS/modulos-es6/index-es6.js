
/*
//import {eleva, suma, code} from "./math-es6.js" //Importar partes de un modulo
import * as moduleMath from "./math-es6.js"
import getFactorial, {libro} from "./math-es6.js"

const sum= moduleMath.suma(4,12)
console.log(sum)

const potencia=moduleMath.eleva(3,2)
console.log(potencia)

console.log(moduleMath.code)

console.log(getFactorial(5))

console.log(libro)

//Instalar axios para hacer llamadas a servicios externos

import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/ditto') //Se pone la url 
  .then(function (response) {
    // handle success
    console.log("Sucess")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.error("ERROR!")
    console.log(error);
  });

//Librerías más usadas: JQuery (html), ReactJS, ThreeJS (el dom en una app 3D)
*/
//Depuración de código

const persona = {
nombre: "Elber",
edad: 24

}
function getDobleEdad (edad){
  return 2 * edad
}

const DobleEdad = getDobleEdad(persona.edad)
console.log(DobleEdad);