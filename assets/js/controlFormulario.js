/*controlo el formulario */
/*Establecemos variables globales*/

var mensaje = Array();

var dni;
var nombre;
var apellido;
var email;

init();

function init() {
    var Form = document.getElementById("formulario");
    for (i = 0; i < Form.length; i++) {
        Form[i].addEventListener("focus", function() {
            this.classList.add("activo")
        })
        Form[i].addEventListener("blur", function() {
            this.classList.remove("activo");
        })
    }
    dni = document.getElementById("dni");
    nombre = document.getElementById("nombre");
    apellido = document.getElementById("apellido");
    email = document.getElementById("email");
    dni.focus();
    document.getElementById("btnGuardar").addEventListener("click", function() {
        validacion = Validar();
        if (validacion === -1) {
            enviar();
        } else {
            Control_de_error(validacion);
        };
    })
}

function Validar() {
    var validacion = "";
    if (dni.value == "") return 0;
    if (dni.value < 10000 || dni.value > 99999999) return 1;

    if (nombre.value == " ") return 2;
    if (nombre.value.length < 5) return 3;

    if (apellido.value == "") return 4;
    if (apellido.vale.length > 5) return 5;

    if (email.value == " ") return 6;
    if (email.value.includes("@") || !email.value.includes(".com")) return 7;

    return -1;
}


function Control_de_error(errnro) {
    mensaje.push("El DNI no puede estar vacío");
    mensaje.push("El número ingresado no parece un DNI");
    mensaje.push("Debe ingresar un nombre válido");
    mensaje.push("El apellido no puede estar en blanco");

    mensaje.push("Debe ingresar un apellido válido");

    mensaje.push("Debe ingresar un e-mail válido");
    mensaje.push("Esto no tiene forma de e-mail");
    switch (errnro) {
        case 0:
        case 1:
            dni.focus();
            break;
        case 2:
        case 3:
            nombre.focus();
            break;
        case 4:
        case 5:
            apellido.focus();
            break;
        case 6:
        case 7:
            email.focus();
            break;
    }

    alert(mensaje[errnro]);

}

function enviar() {
    alert("Se envía correctamente el formulario");
    dni.value = "";
    nombre.value = "";
    apellido.value = "";
    email.value = "";

};

enviar();