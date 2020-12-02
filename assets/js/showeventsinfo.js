const endDateShow=document.getElementById("end-date_show")
const descriptionShow=document.getElementById("description_show")
const titleShow=document.getElementById("title_show")
const initialDateShow=document.getElementById("initial-date_show")
const containerEventShow=document.querySelector(".container__events-info")
const btnCloseShow=document.getElementById("closeShow")


function showAllinfo(title,initial){
    const inDate=new Date(initial)
    let currentEvent=events.filter(e=>{
        if(e.name===title && e.initialDate===initial){
            return true
        }
        return false
    })
    if(currentEvent[0].finalDate===initial ||currentEvent[0].finalDate===""){
        endDateShow.parentElement.style.display="none"
    }else{
        const finDate=new Date(currentEvent[0].finalDate)
        endDateShow.textContent=finDate.toLocaleDateString()+ " " + finDate.toLocaleTimeString();
    }
    if(currentEvent[0].description===""){
        descriptionShow.parentElement.style.display="none"
    }
    initialDateShow.setAttribute("data-date",initial)
    containerEventShow.style.display="flex"
    titleShow.textContent=title;
    initialDateShow.textContent=inDate.toLocaleDateString()+ " " + inDate.toLocaleTimeString();
    descriptionShow.textContent=currentEvent[0].description;
    document.getElementById("type_show").textContent=currentEvent[0].eventType;
}
//close show event
containerEventShow.addEventListener('click',closeWindowShow)

function closeWindowShow(e){
    if(e.target.id=== "closeShow"|| e.target.id==="containerEventsInfo" || e.target.id==="delete-event"){
        endDateShow.parentElement.style.display="block"
        descriptionShow.parentElement.style.display="block"
        containerEventShow.style.display="none"
    }
}

document.getElementById("delete-event").addEventListener('click',deleteEvent)

function deleteEvent(){
    events=events.filter(e=>{
        if(e.name===titleShow.textContent && e.initialDate===initialDateShow.getAttribute("data-date")){
            return false
        }
        return true
    })
    localStorage.setItem("events",JSON.stringify(events))
    printEvent()
    closeWindowShow()
}
