dates.addEventListener('mouseover',(e) =>btnShow(e));
dates.addEventListener('mouseout',(e) =>btnHidden(e));

const btnShow = (e) =>{
    e.target.parentElement.children[0].classList.add("visibility")
}
const btnHidden = (e) =>{
    if(e.fromElement.localName!=="button"){
        e.target.parentElement.children[0].classList.remove("visibility")
    }
}

const btnAddEvent = (year,month,day)=>{
    let datum
    if(month===-1){
        year--
    }
    if(day<10){
        if(month<9){
            if(month+1===0){
                datum=`${year}-12-0${day}`
            }else{
                datum=`${year}-0${month+1}-0${day}`
            }
        }else{
            datum=`${year}-${month+1}-0${day}`
        }
    }else{
        if(month<9){
            if(month+1==0){
                datum=`${year}-12-${day}`
            }else{
                datum=`${year}-0${month+1}-${day}`
            }
        }else {
            datum=`${year}-${month+1}-${day}`
        }
    }
    console.log(datum)
    document.getElementById("initialDate").value=datum+"T12:00"
    document.getElementById("form-container").style.display = "flex";
}
