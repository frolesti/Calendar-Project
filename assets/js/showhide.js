//Funciones para abrir y cerrar la ventana de los eventos
document.getElementById("btn__event").addEventListener("click", ()=>{
    document.getElementById("form-container").style.display = "initial";
});

document.getElementById("closeTag").addEventListener("click", ()=>{
    document.getElementById("form-container").style.display = "none";
});

//Show options in form event
document.querySelector(".clickable_date").addEventListener("click", ()=>{
    document.getElementById("endDate_div").style.visibility = "visible";
});

document.querySelector(".clickable_time").addEventListener("click", ()=>{
    document.getElementById("time_div").style.visibility = "visible";
});

//Validadores

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
        finalDate: document.getElementById("endDate").value,
        time: document.getElementById("time").value,
        description: document.getElementById("description").value,
        eventType:document.getElementById("eventType").value
    }
    if(ev.name === null || ev.initialDate === null){document.querySelector("form").reset();}
    else {events.push(eventInfo);}
    
    localStorage.setItem("events", JSON.stringify(events));
    document.querySelector("form").reset();
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("saveBtn").addEventListener("click", addEventInfo);
})