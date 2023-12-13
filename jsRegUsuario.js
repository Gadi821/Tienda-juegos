let datos = [];

function llenartabla(){
    let nombre = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let edad = document.getElementById('inputAge').value;
    let password = document.getElementById('inputPassword').value;
    if ( nombre.trim()==="" || email.trim()===""|| edad.trim()===""||password.trim()===""){
        alert("faltan datos")
        return;
    }
    datos.push({
        nombre: nombre, email: email, edad: edad, password: password
    });
    document.getElementById('inputName').value = "";
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputAge').value = "";
    document.getElementById('inputPassword').value = "";
    cargartabla();
}
function cargartabla(){
    let tbody = document.getElementById('tablareg').getElementsByTagName('tbody')[0];
    datos.forEach(datos => {
        let fila = tbody.insertRow();
        fila.insertCell(0).textContent=datos.nombre;
        fila.insertCell(1).textContent=datos.email;
        fila.insertCell(2).textContent=datos.edad;
        fila.insertCell(3).textContent=datos.password;
    });
}
const agregar = document.querySelector("#btncrear")
agregar.addEventListener("click",llenartabla)