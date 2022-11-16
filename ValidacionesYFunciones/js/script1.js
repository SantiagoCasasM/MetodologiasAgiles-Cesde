var num1 = parseInt(prompt("Digite el primer numero"));
var num2 = parseInt(prompt("Digite el segundo numero"));
var operador = parseInt(prompt("¿Que operador desea hacer?: + , - , * , / "));
var resultado = 0;

switch(operador) {
    case 1:
        operador = '+'
        resultado = num1 + num2
        document.write("Este es el resultado de sus dos numero y su operador logico: "+resultado)
        break;
    case 2:
        operador = '-'
        resultado = num1 - num2
        document.write("Este es el resultado de sus dos numero y su operador logico: "+resultado)
        break;
    case 3:
        operador = '*'
        resultado = num1 * num2
        document.write("Este es el resultado de sus dos numero y su operador logico: "+resultado)
        break;
    case 4:
        operador = '/'
        resultado = num1 / num2
        document.write("Este es el resultado de sus dos numero y su operador logico: "+resultado)
        break;

  }