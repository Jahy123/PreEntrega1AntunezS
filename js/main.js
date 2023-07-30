
const codigo = 1234;



let usuario = prompt("Ingrese su nombre");


    if (usuario == ""){
        while (usuario == "") {
            alert ("No ha introducido ningun nombre. Vuelva a intentarlo");
            usuario = prompt("Ingrese un nombre válido");
        }
    }
    alert ("Nombre de usuario añadido")


let codigoingresado = prompt("Ingrese el codigo");
    if (codigoingresado != codigo){
        while (codigoingresado != codigo) {
            alert ("Codigo incorrecto. Vuelva a intentarlo");
            codigoingresado = prompt("Ingrese el codigo correcto");
    }

    }
    alert ("Codigo correcto. Ahora tiene acceso.");








 






