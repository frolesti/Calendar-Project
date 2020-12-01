const printEvent=()=>{
    let monthEvents=events.filter(e=>parseInt(e.initialDate.slice(5,7))===monthNumber+1)
    let daysCurrentMonth=document.querySelectorAll(".calendar__month-days")
    monthEvents.filter(e=>(parseInt(e.initialDate.slice(0,4))===currentYear))
    monthEvents.forEach(e=>{
        if(e.initialDate.slice(8,9)==="0"){
            for(day of daysCurrentMonth){
                if(e.initialDate.slice(9)===day.children[0].textContent){
                    console.log(e.eventType)
                    day.children[1].innerHTML=`<p class="${e.eventType}">${e.name}</p>`
                }}
        }else{
            for(day of daysCurrentMonth){
            if(e.initialDate.slice(8)===day.children[0].textContent){
                console.log(e.eventType)
                day.children[1].innerHTML=`<p class="${e.eventType}">${e.name}</p>`
            }
            }
        }
    })


}
