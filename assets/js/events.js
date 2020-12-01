const printEvent=(month)=>{
    let monthEvents=events.filter(e=>parseInt(parseInt(e.initialDate.slice(5,7)))===monthNumber+1)
    let daysCurrentMonth=document.querySelectorAll(".calendar__month-days")
    monthEvents.forEach(e=>{
        if(e.initialDate.slice(8,9)==="0"){
            for(day of daysCurrentMonth){
                console.log(e.initialDate.slice(8))
            console.log(day.children[0].textContent)
            console.log(e.initialDate.slice(8)===day.children[0].textContent)
            if(e.initialDate.slice(9)===day.children[0].textContent){
                console.log("aqui")
                day.children[1].innerHTML=`<p class="event">${e.name}</p>`
            }}
        }else{
            for(day of daysCurrentMonth){
            if(e.initialDate.slice(8)===day.children[0].textContent){
                console.log("aqui")
                day.children[1].innerHTML=`<p class="event">${e.name}</p>`
            }
            }
        }
    })


}
