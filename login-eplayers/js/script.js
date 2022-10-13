let email = document.getElementById("campo_email");

function enviarEmail(e) {
    let emailDigitado = email.value;
    console.log(emailDigitado)
    e.preventDefault();
}