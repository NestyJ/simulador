let opcional

let numeroIngresado;
numeroIngresado = prompt ("¡Hola! Ingresa el precio de tu producto para calcular el precio final utilizando tarjeta de credito: ");

let preguntaInicial;
preguntaInicial = prompt ("¡Entendido! ¿En cuantas cuotas quieres pagar por el producto? Escribi el numero deseado ( 3 / 6 / 12 / 24 ) (Escribe ESC para salir del cuestionario) ");


function dividir (numeroIngresado, preguntaInicial){
   let resultado = numeroIngresado / preguntaInicial;
}

dividir (numeroIngresado / 3);
dividir (numeroIngresado / 6);
dividir (numeroIngresado / 12);
dividir (numeroIngresado / 24);


while (preguntaInicial != "ESC"){
    switch (preguntaInicial){

        case "3":
        alert ("El precio de tu pedido quedaria en 3 cuotas de: " + resultado);
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;
        case "6":
        alert ("El precio de tu pedido quedaria en 6 cuotas de: ");
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;
        case "12":
        alert ("El precio de tu pedido quedaria en 12 cuotas de: ");
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;
        case "24":
        alert ("El precio de tu pedido quedaria en 3 cuotas de: ");
        opcional = prompt ("Para finalizar escriba SI / para volver al menu anterior escriba VOLVER");
        if (opcional == "SI") {
            alert("¡Felicitaciones! Ya se impacto el pago.");
        }
        break;

    }
}
