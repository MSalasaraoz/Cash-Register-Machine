function mostrarResultado(valor) {
    document.getElementById('display').innerHTML = valor;
    
}

function obtenerResultado() {
    return (document.getElementById('display').innerHTML);
}


function presionarNumero(valor) {
    var result = obtenerResultado();
    mostrarResultado(result + valor);
    console.log(result + valor);
    if (result + valor == '0101001') {
        mostrarResultado('Rolling(<>)');
        var audio = document.getElementById("audio");
        audio.play();
        efectoJackpot()
    } else{
        mostrarResultado(result + valor);
    }
}

function efectoJackpot(){
    let logo = document.getElementById('logo');
    logo.classList.add('efectoLogo');
}

function sumar() {
    num1 = obtenerResultado();
    operacion = "+";
    limpiar();
}

function restar() {
    num1 = obtenerResultado();
    operacion = "-";
    limpiar();
}

function multiplicar() {
    num1 = obtenerResultado();
    operacion = "*";
    limpiar();
}

function dividir() {
    num1 = obtenerResultado();
    operacion = "/";
    limpiar();
}

function limpiar() {
    mostrarResultado(" ");
}

function calcular() {
    num2 = obtenerResultado();
    resolver();
}

function resolver() {
    var calculo;
    var op1 = parseFloat(num1);
    var op2 = parseFloat(num2);
    if (operacion === "+") {
        calculo = op1 + op2;
    } else if (operacion === "-") {
        calculo = op1 - op2;
    } else if (operacion === "/") {
        calculo = op1 / op2;
        if (op2 === 0) {
            calculo = "Error";
        }
    } else if (operacion === "*") {
        calculo = op1 * op2;
    }
    mostrarResultado(calculo);
    operacion = " ";
    num1 = 0;
    num2 = 0;
}

function imprimir(){
    document.getElementById('total').innerHTML = 'Total: ' + obtenerResultado();
}

function ac() {
    mostrarResultado(" ");
    num1 = 0;
    num2 = 0;
}
