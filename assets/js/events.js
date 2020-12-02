const printEvent=()=>{
    let monthEvents=events.filter(e=>filterCurrentMonth(e))
    let lastMonthEvents=events.filter(e=>filterLastMonth(e))
    let daysCurrentMonth=document.querySelectorAll(".calendar__month-days")
    let daysLastMonth=document.querySelectorAll(".calendar__last-days")
    cleanEvents(daysCurrentMonth,daysLastMonth)
    monthEvents.forEach(e=>{
        if(e.initialDate.slice(8,9)==="0"){
            for(day of daysCurrentMonth){
                if(e.initialDate.slice(9)===day.children[1].textContent){
                    day.children[2].insertAdjacentHTML("beforeend",`<p class="${e.eventType}">${e.name}</p>`)
                }}
        }else{
            for(day of daysCurrentMonth){
            if(e.initialDate.slice(8)===day.children[1].textContent){
                day.children[2].insertAdjacentHTML("beforeend",`<p class="${e.eventType}">${e.name}</p>`)
            }
            }
        }
    })
    lastMonthEvents.forEach(e=>{
            for(lastDay of daysLastMonth){
                if(e.initialDate.slice(8)===lastDay.children[1].textContent){
                    lastDay.children[2].insertAdjacentHTML("beforeend",`<p class="${e.eventType}">${e.name}</p>`)
                }
            }
        })

}
function filterLastMonth(e){
    if(monthNumber=== 0){
        if(parseInt(e.initialDate.slice(0,4))===currentYear-1){
            return parseInt(e.initialDate.slice(5,7))===12
        }
        return false
    }else{
        if(parseInt(e.initialDate.slice(0,4))===currentYear){
            if((parseInt(e.initialDate.slice(5,7))===monthNumber)){
                return true
            }
            return false
        }
        return false
    }
}
function filterCurrentMonth(e){
    if((parseInt(e.initialDate.slice(0,4))===currentYear)){
        if(parseInt(e.initialDate.slice(5,7))===monthNumber+1){
            return true
        }
        return false
    }
    return false
}
function cleanEvents(current,last){
    for(day of current){
        day.children[2].innerHTML="";
    }
    for(day of last){
        day.children[2].innerHTML="";
    }
}