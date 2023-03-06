var restApiUrl = "https://script.google.com/macros/s/AKfycbwwCwKRLEbncOMvNUPdYlAWhqd43c_KShMlXleqk4KkT5_mE3uylO12jY8EnvplYAQIGQ/exec";

document.addEventListener("DOMContentLoaded", function(event) { 
    fetch(restApiUrl)
    .then(response => response.text())
    .then(data => replaceStaticContent(data));
});

/*
<p>  document.getElementById("address").innerText = data.address;
<h1>  document.getElementById("mi_horario").innerHTML = data.horario;
*/

function replaceStaticContent(rawData){
    
    var data = JSON.parse(rawData);
    console.log(data);
    //updating web title
    document.title = data.name;
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("phone").innerHTML = data.phone;
    document.getElementById("address").innerText = data.address;
    document.getElementById("mi_horario").innerHTML = data.horario;
    document.getElementById("correo").innerText = data.correo;

    document.getElementById("mensaje_3_titulo").innerHTML = data.mensaje_3_titulo;

}