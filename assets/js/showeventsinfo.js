function showAllinfo(name,initial){
    console.log("aqui")
    document.querySelector(".container__events-info").style.display="flex"
    document.getElementById("title_show").textContent=name;
    document.getElementById("initial-date_show").textContent=initial;
    document.getElementById("end-date_show").textContent=end;
    document.getElementById("description_show").textContent=description;
    document.getElementById("type_show").textContent=type;
}