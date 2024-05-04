//Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10; 
//Array
let listaNumerosSorteados = [];

/* FUNCIÓN PARA CAMBIAR TEXTOS */
function asignarTextoElemento(selector, texto) {
    let selectorHTML = document.querySelector(selector);
    selectorHTML.innerHTML = texto;
}

/* FUNCIÓN GENERAR NÚMERO SECRETO */
function generarNumeroSecreto() {
    //Genero el número secreo y lo almaceno en una variable
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
        asignarTextoElemento('h1', 'Juego finalizado');
    } else { 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else { 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
} 

/* FUNCIÓN PARA VERIFICAR QUE EL NÚMERO INHRESADO POR USUARIO SEA IGUAL AL NÚMERO GENERADO */
function intentoDeUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja(); 
    }
    return;
}

/* FUNCIÓN PARA LIMPIAR EL INPUT */
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
}

/* FUNCIÓN CONDICIONES INICIALES */
function condicionesIniciales() {
    //Indicar mensaje de intervalo de números
    asignarTextoElemento('p', `Elije un número del 1 a ${numeroMaximo}`);
    asignarTextoElemento('h1', 'Juego del número secreto');   
    //Generar el número aleatorio. Lo llamo sin el LET porque no estamos declarando el número secreto otra vez
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos. Digo nuevamente que intentos es = 1
    intentos = 1;
    console.log(numeroSecreto);
}

/* FUNCIÓN REINICIAR JUEGO */
function reiniciarJuego() {
    //Limpiar el input
    limpiarCaja();
    //Indicar mensaje de intervalo de números, cambiar los mensajes
    condicionesIniciales();
    //Deshabilitar el botón de Nuevo Juego porque solo se habilita cuando acierto. 
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

/* LLAMADA A LA FUNCIÓN QUE DA INICIO A ESTE PROGRAMA */
condicionesIniciales();
