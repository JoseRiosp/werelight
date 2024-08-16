
// var afecta todo el codigo
//let afecta solo el bloque donde se declare
/*
let hey="hello";

for(i=0; i<9; i++){
    let hey ="12312"
}

hey

let num=4;

console.log(typeof num);

//objetos

const movil={
    altura:10,
    anchura: 5,
    marca: "xiaomi",
    contacto:["elber", "jose", "rios"],
    tarjeta: {
        marca: "iphone",

    }

}

let result=(movil.tarjeta.marca)

console.log(result)

//Fecha

const ahora= new Date()
console.log(ahora);



saludar("Elber")

function saludar (nombre) {
    console.log(`hola ${nombre}`)
}

function suma(...nums){
    console.log(nums.reduce((a,b)=> a+b))
}
suma(1,2,3,4,5,6,7)

//Funciones tipo flecha y anonimas

const array =[1,5,6,2,7,4,8,3]

const array2 = array.map(function(valor){
return valor * 2
}) //Funcion callback

console.log(array2)

//Funcion tipo flecha (anonimas)

const array =[1,5,6,2,7,4,8,3]
const array2 = array.map((valor)=> valor * 2)
console.log(array2)

//Las funciones flecha se guardan en una constante
//Las flechas no se inicializan, no se pueden cambiar los valores fuera de ellas

//Funciones promesas

const miPromesa = new Promise((resolve, reject)=>{
    if (true) {
        resolve()
    } else {reject()}
})

miPromesa 
.then(()=> console.log("Se ha ejecutado de forma correcta")) //Para tomar el exito o la rejection
.catch(()=> console.log("ERROR")) //Para tomar el reject
.finally(()=> console.log("Siempre me ejecuto")) //Siempre se ejecuta rejection or sucess

function* generaId(){
    let id=0;
    while (true){
        id++
        if(id == 5){
            return id
        }
        yield id //Se queda esperando, da el valor id, hasta que se vuelva a llamar otra vez
    }
}

const gen =generaId();

console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().done)

//Errores en Javascript

const miFuncion = val => {
    if(typeof val == "number"){
    return 2* val
    }

   //return false
    throw new Error("El valor debe ser tipo número")
}


//console.log(miFuncion("string"))

//Como asegurarse que sea un number y no algo más? con try y catch

try {
    //Codigo que puede fallar
    console.log ("Está ejecutándose correctamente")
    doble=miFuncion("ala")
    console.log(doble)
} catch (e) { //El catch toma la salida "throw new error" y lo pone en la variable "e"
    //En caso de que falle, ejecuta esto otro
    //Los errores se ejecutan en console.error
    console.error("ERROR!")
    console.error (e)
    //La "e" es el error que nosotros le ponemos en "throw new error"
    
}*/

//Otros tipos de errores: 

// InternalError: el overflow, cuando una función se llama así misma continuamente)
// SyntaxError: Está mal escrito la función o variable 
// TypeError: Le pasamos un número, pero debe ser un booleano, o un string 
// RangeError: No se puede acceder a una posición desde el metodo actual
// ReferenceError: No esta definida una variable 

//Objetos y clases en Javascript

//Variables en clase/objetos: atributos
//Funciones en clase/objetos: métodos

class Persona {
    //Private => #
    nombre;
    edad;
    //Protected => _
    //_isDeveloper = true
    constructor(nom,age){
            this.nombre=nom
            this.edad=age
            //this.isDeveloper=isDeveloper
    }

    saludo(){
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }

    getNombre(){ //Sacar el atributo private con un getter
        return this.nombre
    }

    getEdad(){
        return this.edad
    }

    setEdad(new_age){
        this.edad=new_age
    }
}

const new_ppl =new Persona("Elber", 25, true)
    console.log(new_ppl)
    console.log(new_ppl.nombre)
    console.log(new_ppl.getNombre()) //Sacar un atributo private
    //console.log(new_ppl.isDeveloper)
//instanceof = similar a typeof, pero de clases
    console.log(new_ppl instanceof Persona) //new_ppl es una instancia de Persona?
//Setter
    console.log(new_ppl.edad)
    new_ppl.setEdad(34)
    console.log(new_ppl.edad)


    //Herencia y Polimorfismo en Javascript

    
    class Developer extends Persona { //"extends" para heredar
        constructor(nombre, edad, language){
            super(nombre,edad) //Super para usar el primer constructor del padre
            this.language=language

        }
        saludo(){
            super.saludo()
            console.log(`Y soy desarrollador de ${this.language}`)
        }
    }

    const newDev = new Developer("Jose", 30, "Java")
    console.log(newDev)
    newDev.saludo()

    //Interfaces => duck typing 

    //Typescript => Sí se pueden usar interfaces 

    //Promesas:

    var p = new Promise(function(resolve, reject) {
	
        // Do an async task async task and then...
    
        if(/* good condition */a) {
            resolve('Success!');
        }
        else {
            reject('Failure!');
            //throw new Error("Error!")
        }
    });
    
    p.then(function(result) {  //Se ejecutan el "resolve" de la promesa
        /* do something with the result */
    }).catch(function(e) { // Se ejecuta el "reject" de la promesa
        /* error :( */
        //console.error(e) //Se ejecuta el Thrown New Error
    }).finally(function() {
       /* executes regardless or success for failure */ 
    });

    //Ejecutar con un setTimeOut

    new Promise(function(resolve, reject) {
        // A mock async action using setTimeout
        setTimeout(function() { resolve(10); }, 3000); //3seg
    })
    .then(function(result) {
        console.log(result);
    })
    
    // From the console:
    // 10

    //Cadenas de .then:

    .then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// From the console:
// first then:  10
// second then:  20
// last then:  40
(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("success") })
    .catch(() => { console.log("fail") })
    .finally(res => { console.log("finally") });

// >> fail
// >> finally
//finally 

downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto (error, photo) {
  if (error)
    console.error('Download error!', error)
  else 
  console.log('Download finished', photo)
}

console.log('Download started')


let script = document.createElement('script'); // Crear un <script/> en el html
//ponerle el atributo src=""
script.src = `http://another.com/weather.json?callback=gotWeather`; //Llama el script weather.json y activa nuestra funcion "gotWeather" como respuesta
document.body.append(script); //anexarlo al <body> del html