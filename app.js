let opcional

let numeroIngresado;
numeroIngresado = prompt ("¡Hola! Ingresa el precio de tu producto para calcular el precio final utilizando tarjeta de credito: ");

let preguntaInicial;
preguntaInicial = prompt ("¡Entendido! ¿En cuantas cuotas quieres pagar por el producto? Escribi el numero deseado ( 3 / 6 / 12 / 24 ) (Escribe VOLVER para salir del cuestionario) ");


const dividir = function(numeroIngresado, preguntaInicial){
   return  numeroIngresado / preguntaInicial;
}

while (preguntaInicial != "VOLVER"){
    switch (preguntaInicial){

        case "3":
        alert ("El precio de tu pedido quedaria en 3 cuotas de: " + dividir (numeroIngresado, preguntaInicial));
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;
        case "6":
        alert ("El precio de tu pedido quedaria en 6 cuotas de: "+ dividir (numeroIngresado, preguntaInicial));
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;
        case "12":
        alert ("El precio de tu pedido quedaria en 12 cuotas de: " + dividir (numeroIngresado, preguntaInicial));
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;
        case "24":
        alert ("El precio de tu pedido quedaria en 3 cuotas de: " + dividir (numeroIngresado, preguntaInicial));
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;

    }
}
