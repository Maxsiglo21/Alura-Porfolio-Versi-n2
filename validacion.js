/*controlo el formulario */
function validarDatos() {
    window.event.preventDefault()

    if (document.form.nombre.value == " ") {
        alert("Campo nombre es obligatorio")
        document.form.nombre.focus()

    } else if (document.form.email.value == " ") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus()

    } else if (document.form.asunto.value == " ") {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus()

    } else if (document.form.mensaje.value == " " || document.form.mensaje.value.length <= 50) {
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres")
        document.form.mensaje.focus()

    } else if (document.form.email.value.indexOf('@') == -1 ||
        document.form.email.value.indexOf('.') == -1) {
        alert("e-mail inválido")
    }
    alert("El mensaje se envió correctamente")
}
document.querySelector('form').addEventListener('submit', validarDatos)