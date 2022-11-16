function materias(){
    var num1m = parseInt(prompt("Digite la primera nota para matematicas"));
    var num2m = parseInt(prompt("Digite la segunda nota para matematicas"));
    var num3m = parseInt(prompt("Digite la tercera nota para matematicas"));
    var resultadomate = (num1m + num2m + num3m) / 3;
    if(resultadomate < 3){
        document.write("-> Perdiste la materia de Matematicas")
    }else{
        document.write("-> Usted gano la materia de Matematicas")
    }
    var num1e = parseInt(prompt("Digite la primera nota para español"));
    var num2e = parseInt(prompt("Digite la segunda nota para español"));
    var num3e = parseInt(prompt("Digite la tercera nota para español"));
    var resultadoespa = (num1e + num2e + num3e) / 3;
    if(resultadoespa < 3){
        document.write("-> Perdiste la materia de Español")
    }else{
        document.write("-> Usted gano la materia de Español")
    }
}