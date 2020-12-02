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

    if (eventInfo.name === ""|| eventInfo.initialDate === ""){
        alert("You must enter the event's name and its initial date!");
        return;
    }
    else if (eventInfo.finalDate === ""){
        eventInfo.finalDate = eventInfo.initialDate;
        events.push(eventInfo);
        localStorage.setItem("events",JSON.stringify(events))
        document.getElementById("saveBtn").addEventListener("click", ()=>{
            document.getElementById("form-container").style.display = "none";
            document.querySelector("form").reset();})
        
        printEvent();
    }

    else {
        events.push(eventInfo);
        localStorage.setItem("events",JSON.stringify(events))
        document.getElementById("saveBtn").addEventListener("click", ()=>{
            document.getElementById("form-container").style.display = "none";
            document.querySelector("form").reset();})
            
        
        printEvent();
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("saveBtn").addEventListener("click", addEventInfo);})


//Cambia la clase de los elementos caducados
const expiredEvent = () =>{
    let currentDate = new Date();

    for (e in events){
        const initDate = new Date (events[e].initialDate);
        const currentDate = new Date();

        if (currentDate.getTime() > initDate.getTime()){
            events[e].eventType = "expired";
        }
    }
}

expiredEvent();


// Función para cerrar la ventana de eventos con ESC
document.addEventListener("keydown", pressEsc, false);

function pressEsc(key){
    if(key.keyCode === 27){
        document.querySelector("form").reset();
        document.getElementById("form-container").style.display = "none";
    }
}

//

function checkDate(){
    let momentDate = new Date();
    for (ev in localStorage.getItem("events")){
        console.log(ev);
    }
}


//TOAST---START
const Toast = {

    hideTimeMs: 10000, // 10 seconds
    scheduleIntervalMs: 1000 * 10, // 1 minute
    reloadTimeoutMs: 10000,

    init() {
        this.el = document.createElement("div");
        this.el.className = "toast";
        document.body.appendChild(this.el);

        this.schedule();
    },

    show(message){
        this.el.textContent = message;
        this.el.classList.add('toast--visible');

        setTimeout(() => {
            this.el.classList.remove('toast--visible');
        }, this.hideTimeMs);
    },


    schedule(){ 
        const msg_array = [
            this.start_message,
            this.msg1,
            this.msg2,
            this.msg3,
            this.msg4,
            this.reset_message
        ];

        msg_array.forEach((msg, i) => {
            const timeoutInMiliseconds = this.scheduleIntervalMs * i // ms * s * index
            setTimeout(() => {
                this.show(msg)

                const isLastElement = i === msg_array.length - 1
                if (isLastElement) {
                    this.waitAndReloadPage()
                }
            }, timeoutInMiliseconds)
        })
    },

    waitAndReloadPage() {
        setTimeout(() => location.reload(), this.reloadTimeoutMs)
    }
};


