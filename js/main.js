
const codigo = 1234;

const ingresar = ingresarUsuario();
const acceso = ingresarCodigo();




function ingresarUsuario () {
    let usuario = prompt("Ingrese su nombre");
    if (usuario == ""){
        while (usuario == "") {
            usuario = prompt("Ingrese un nombre válido");
            
        }
    }
    alert ("Nombre de usuario añadido");
}




function ingresarCodigo () {
    let codigoingresado = prompt("Ingrese el codigo");
    if (codigoingresado != codigo){
        while (codigoingresado != codigo) {
            alert ("Codigo incorrecto. Vuelva a intentarlo");
            codigoingresado = prompt("Ingrese el codigo correcto");
    }

    }
    alert ("Codigo correcto. Ahora tiene acceso.");
}





 






