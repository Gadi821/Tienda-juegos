let xusuario="Gadi821"
let xemail = "gadi@gmail.com"
let xpass = "123456"

$("#btnlog").click(function () { 
    let usuario = document.getElementById('inputUsuario').value;
    let email = document.getElementById('inputEmail').value;
    let pass = document.getElementById('inputPassword').value;
    if ((usuario!=xusuario)&&(email!=xemail)&&(pass!=xpass)){
        alert("Datos incorrectos");
        return;
    }
});