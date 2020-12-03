//Funciones para abrir y cerrar la ventana de los eventos
document.querySelector(".btn__event").addEventListener("click", ()=>{
    document.getElementById("form-container").style.display = "flex";
});

document.getElementById("form-container").addEventListener("click", (e)=>{
    if(e.target.id=== "closeTag"|| e.target.id==="cancelBtn" || e.target.id==="form-container"){
        document.getElementById("event_form").reset();
        document.getElementById("form-container").style.display = "none";
        document.querySelector(".endDate_div").classList.remove("show_div")
        document.querySelector(".time_div").classList.remove("show_div");
    }
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

let events = [];


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

    if (eventInfo.name === ""|| eventInfo.initialDate === "" || eventInfo.name.length>60){
        document.getElementById("message").classList.add("show_div")
        document.getElementById("message").textContent="Missing fields"
        setTimeout((e=>document.getElementById("message").classList.remove("show_div")),3000)
        return;
    }
    else if (eventInfo.finalDate === ""){
        eventInfo.finalDate = eventInfo.initialDate;
        events.push(eventInfo);
        localStorage.setItem("events",JSON.stringify(events))
        document.getElementById("saveBtn").addEventListener("click", ()=>{
            document.getElementById("form-container").style.display = "none";
            document.querySelector("form").reset();
            document.querySelector(".endDate_div").classList.remove("show_div")
            document.querySelector(".time_div").classList.remove("show_div");})
        printEvent();
    }

    else {
        events.push(eventInfo);
        localStorage.setItem("events",JSON.stringify(events))
        document.getElementById("saveBtn").addEventListener("click", ()=>{
            document.getElementById("form-container").style.display = "none";
            document.querySelector("form").reset();
            document.querySelector(".endDate_div").classList.remove("show_div")
            document.querySelector(".time_div").classList.remove("show_div");})
        printEvent();
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("saveBtn").addEventListener("click", addEventInfo);})


//Cambia la clase de los elementos caducados
const expiredEvent = () =>{

    for (e in events){
        let initDate = new Date (events[e].initialDate);
        let currentDate = new Date();

        if (currentDate.getTime() > initDate.getTime()){
            events[e].eventType = "expired";
        }
    }
    printEvent();
}


// Función para cerrar la ventana de eventos con ESC
document.addEventListener("keydown", pressEsc, false);

function pressEsc(key){
    if(key.keyCode === 27){
        document.querySelector("form").reset();
        document.getElementById("form-container").style.display = "none";
        if(containerEventShow.style.display==="flex"){
            closeWindowShow(key)
        }
    }
}

//

function checkDate(){
    setInterval(()=>{
        for (e in events){
            let finDate = new Date(events[e].finalDate);
            let nowDate = new Date();

            if (finDate.getTime() < nowDate.getTime() && events[e].eventType !== "expired"){

                document.getElementById("popup_div").children[0].insertAdjacentHTML ("beforeend",`<p>${events[e].name} has expired, its end date was ${finDate.toLocaleDateString()+ " " + finDate.toLocaleTimeString()}</p>`);
                events[e].eventType = "expired";
                document.getElementById("popup_div").style.display = "block";
                document.getElementById("popup_div").children[0].style.display = "block";
                expiredEvent();

                setTimeout(()=>{
                    document.getElementById("popup_div").style.display = "none";
                    document.getElementById("popup_div").children[0].style.display = "none";
                    document.getElementById("popup_div").children[0].innerHTML = "";
                    
                }, 3000)
                
            }
            checkTime(e);
        }
    }, 10000)
}

checkDate();

function checkTime(e) {
    let msInMin = 60*1000
    let newDate = new Date();
    let inDate = new Date(events[e].initialDate);
    let dif = Math.abs(inDate.getTime() - newDate.getTime())

    if(dif < events[e].time * msInMin && events[e].eventType !== "data-warning" && events[e].eventType !== "expired"){
    
        events[e].eventType = "data-warning";
        document.getElementById("popup_div").children[1].insertAdjacentHTML ("beforeend", `<p> ${events[e].name} will start in less than ${events[e].time} minutes </p>`);
        document.getElementById("popup_div").style.display = "block";
        document.getElementById("popup_div").children[1].style.display = "block";
        setTimeout(()=>{
            document.getElementById("popup_div").style.display = "none";
            document.getElementById("popup_div").children[1].style.display = "none";
            document.getElementById("popup_div").children[1].innerHTML = "";
        }, 3000)
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