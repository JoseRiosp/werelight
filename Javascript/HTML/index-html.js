
/*const a=4
const b=8

console.log(a*b);

const p= document.getElementById("parrafo")
console.log(p);

function pantalla (){
    console.log(this);
}

const objeto ={
    tipo: "parrafo",
    longitud: "35"
}

const pasaporpantall= pantalla.bind(objeto)


let f =document.getElementById("formulario")

console.log(f);

f.addEventListener("submit", evento =>{ //Nombre y la función callback con los detalles
    console.log(evento);
    evento.preventDefault() //Evita el comportamiento por defecto
})*/

const hTexto = document.getElementById("h-texto")

console.log("hTexto");

hTexto.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail);
    hTexto.innerText = evento.detail.texto
    hTexto.style.color= evento.detail.color

})

function cambiarTexto(nuevoTexto, color) {
    const evento= new CustomEvent ("cambioTexto", {
        
            detail:
            {texto: nuevoTexto,
            color}
        
    })

    hTexto.dispatchEvent(evento)
}

//Librería Jquery

// $(selector).accion()

// ej; $("h1").hide()
// ej; $("id=").hide()
// ej; $("class=").hide()

/*
$(document).ready(() =>{
    })

    ó

$(()=>{ //Al inicio de cada documento

    //Ocultar el H1 en una página:

    $(".hide-btn").click(()=> {
        $("h1").hide()
        })

        //Modifica el CSS
    $("H1").click(() => {
        $("h1").css({color= "red"})
})

        //Agregar un elemento

    $(".new-element").click(()=>{
        $("ul").append("<li>New element</li>")  
        })
    })
*/





