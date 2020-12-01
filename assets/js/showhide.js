//Funciones para abrir y cerrar la ventana de los eventos
document.querySelector(".btn__event").addEventListener("click", ()=>{
    document.getElementById("form-container").style.display = "initial";
});

//solucionar problemas con la accesibilidad de los divs ocultos
document.getElementById("closeTag").addEventListener("click", ()=>{
    document.getElementById("event_form").reset();
    document.getElementById("form-container").style.display = "none";
})

document.getElementById("cancelBtn").addEventListener("click", ()=>{
    document.getElementById("form-container").style.display = "none";
})

//Show options in form event
document.querySelector(".clickable_date").addEventListener("click", ()=>{
    document.querySelector(".endDate_div").classList.toggle("show_div");
});

document.querySelector(".clickable_time").addEventListener("click", ()=>{
    document.querySelector(".time_div").classList.toggle("show_div");
});

//Validadores

//Funciones para guardar la información del formulario

let events = [{
    name: "polloloco",
    initialDate:"2020-11-30",
    finalDate:"2020-11-30",
    eventType:"meeting"
},{
    name: "pollocuerdo",
    initialDate:"2020-11-01",
    finalDate:"2020-11-05",
    eventType:"personal"
},{
    name: "pollito",
    initialDate:"2020-12-28",
    finalDate:"",
    eventType:"study",
},{
    name: "pollito2",
    initialDate:"2020-12-28",
    finalDate:"",
    eventType:"other",
}];
const addEventInfo = (ev) => {
    ev.preventDefault();
    let eventInfo = {
        name: document.getElementById("eventName").value,
        initialDate: document.getElementById("initialDate").value,
        finalDate: document.getElementById("endDate").value,
        time: document.getElementById("time").value,
        description: document.getElementById("description").value,
        eventType:document.getElementById("eventType").value
    }
    events.push(eventInfo);
    localStorage.setItem("events",JSON.stringify(events))
    document.querySelector("form").reset();
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("saveBtn").addEventListener("click", addEventInfo);
})