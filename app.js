// variables
let inputs = [
document.querySelector('#primerDigito'),
document.querySelector('#segundoDigito'),
document.querySelector('#tercerDigito'),
document.querySelector('#cuartoDigito')
]

let numeros =[] 
let correctos
let buenos
let contador = 0

const numCorrectos = document.querySelector('#numCorrectos')
const numBuenos = document.querySelector('#numBuenos')
const intentos = document.querySelector('#intentos')

const probar = document.querySelector('#probar')
const reiniciar = document.querySelector('#reiniciar')


//Listeners
document.addEventListener('DOMContentLoaded', generarNumerosAleatorios)
probar.addEventListener('click', compararTodo)
reiniciar.addEventListener('click', reiniciarTodo)

//funciones generales

    //genera los numeros aleatorios
function generarNumerosAleatorios(){

    for (let i = 0; i < 4; i++) {
        numeros[i]=parseInt(Math.random()*9)
    }

    while (numeros[0]===numeros[1] || numeros[0]===numeros[2] || numeros[0]===numeros[3] || numeros[1]===numeros[2] || numeros[1]===numeros[3] || numeros[2]===numeros[3]) {

        for (let i = 0; i < 4; i++) {
            numeros[i]=parseInt(Math.random()*9)
        }
    }
}

    //genera los numeros y ademas crea los objetos
function crearTodo() {
    generarNumerosAleatorios()
}

    //Compara el valor ingresado con el valor generado por generarNumerosAleatorios()
function comparadorCorrectos() {
    correctos = 0
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('is-invalid')
        inputs[i].classList.remove('is-valid')  
    }

    for (let i = 0; i < inputs.length; i++) {
        
        if(numeros[i] == parseInt(inputs[i].value)){
            inputs[i].classList.add('is-valid')
            correctos++
        }else{
            inputs[i].classList.add('is-invalid') 
        }
        numCorrectos.innerHTML = correctos
    }
}
    //Compara el valor ingresado con los valores del array inputs
function compararBuenos(){
    buenos = 0
    for (let i = 0; i < inputs.length; i++) {
        
        if (numeros.indexOf(parseInt(inputs[i].value)) != -1) {
            buenos++
        }
    }
    numBuenos.innerHTML = buenos
}

function compararTodo(){
    comparadorCorrectos()
    compararBuenos()
    contador++
    intentos.innerHTML = contador

    if (numCorrectos.innerHTML == 4) {
        alert(`Ganaste!!! lo conseguiste en ${contador} intentos`)
        console.log('ganaste')
    }
}

function reiniciarTodo(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = 0;
        numCorrectos.innerHTML = ""
        numBuenos.innerHTML = ""

        alert(`Casi lo logras!! Realizaste ${contador} y los numeros eran ${numeros[0]} , ${numeros[1]} , ${numeros[2]} y ${numeros[3]}`)
        
        intentos.innerHTML = ""
        
    }
}