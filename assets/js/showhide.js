//Funciones para abrir y cerrar la ventana de los eventos

// Cerrar la ventana con el botón "closeTag"
document.getElementById("closeTag").addEventListener("click", closeModal);

function closeModal() {
    document.getElementsByClassName("form-container").style.display = "none";
}

//Funciones para guardar la información del formulario

let events = [{
    name: "polloloco",
    initialDate:"2020-11-29",
    finalDate:"2020-11-30",
    eventType:"meeting"
},{
    name: "pollocuerdo",
    initialDate:"2020-11-01",
    finalDate:"2020-11-05",
    eventType:"personal"
},{
    name: "pollito",
    initialDate:"2020-10-28",
    finalDate:"",
    eventType:"study",
}];
const addEventInfo = (ev) => {
    ev.preventDefault();
    let eventInfo = {
        name: document.getElementById("eventName").value,
        initialDate: document.getElementById("initialDate").value,
        finalDate: document.getElementById("finalDate").value,
        time: document.getElementById("time").value,
        description: document.getElementById("description").value,
        eventType:document.getElementById("eventType").value
    }
    events.push(eventInfo);
    //localStorage.setItem("events",JSON.stringify(events)) to improve
    document.querySelector("form").reset();
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("saveBtn").addEventListener("click", addEventInfo);
})