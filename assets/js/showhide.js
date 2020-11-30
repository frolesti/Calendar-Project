//Funciones para abrir y cerrar la ventana de los eventos

// Cerrar la ventana con el botón "closeTag"
document.getElementById("closeTag").addEventListener("click", closeModal);

function closeModal() {
    document.getElementsByClassName("form-container").style.display = "none";
}

//Funciones para guardar la información del formulario

let events = [];
const addEventInfo = (ev) => {
    ev.preventDefault();
    let eventInfo = {
        name: document.getElementById("eventName").value,
        initialDate: document.getElementById("initialDate").value,
        finalDate: document.getElementById("finalDate").value,
        time: document.getElementById("time").value,
        description: document.getElementById("description").value,
    }
    events.push(eventInfo);
    document.querySelector("form").reset();
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("saveBtn").addEventListener("click", addEventInfo);
})