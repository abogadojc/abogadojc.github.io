var restApiUrl = "https://script.google.com/macros/s/AKfycbwwCwKRLEbncOMvNUPdYlAWhqd43c_KShMlXleqk4KkT5_mE3uylO12jY8EnvplYAQIGQ/exec";

document.addEventListener("DOMContentLoaded", function (event) {
    fetch(restApiUrl)
        .then(response => response.text())
        .then(data => replaceStaticContent(data));
});

/*
<p>  document.getElementById("address").innerText = data.address;
<h1>  document.getElementById("mi_horario").innerHTML = data.horario;
*/

function replaceStaticContent(rawData) {

    console.log("starting")

    var data = JSON.parse(rawData);
    console.log(data);

    for (htmlElement of document.querySelectorAll("[template=true]")) {

        console.log(htmlElement)
        if(typeof data[htmlElement.id] === 'undefined' ) continue;

        if (htmlElement.tagName === "H1" ||
            htmlElement.tagName === "H2" || 
            htmlElement.tagName === "H3" || 
            htmlElement.tagName === "H4") {
            document.getElementById(htmlElement.id).innerHTML = data[htmlElement.id];
        }else if (htmlElement.tagName === "P" ){
            document.getElementById(htmlElement.id).innerText = data[htmlElement.id];
        }else if (htmlElement.tagName === "A" ){
            htmlElement.href = data[htmlElement.id]
        }else if (htmlElement.tagName === "SPAN" ){
            htmlElement.textContent = data[htmlElement.id]
        } else if (htmlElement.tagName === "IMG" ){
            htmlElement.src = data[htmlElement.id]
        }    
    }

}