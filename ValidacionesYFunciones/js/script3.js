function temperatura(){
    var temperatura1 = parseInt(prompt("Ingrese la temperatura en Grados Centigrados"));

    if(temperatura1 < 36){
        document.write("No tiene fiebre");
    }else{
        document.write("Usted tiene fiebre");
    }
}