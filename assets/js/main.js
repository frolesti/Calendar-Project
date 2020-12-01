let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

let currentDate = new Date();
let yearSticky= currentDate.getFullYear();
let currentMonth= currentDate.getMonth();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');
let btnToday=document.querySelector(".btn__today");
let btnsNew;

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());
btnToday.addEventListener('click', ()=>goToday());

//events=JSON.parse(localStorage.getItem("events"))
const goToday = () => {
    let today = new Date();
    currentMonth= today.getMonth();
    currentDay = today.getDate();
    monthNumber = today.getMonth();
    currentYear = today.getFullYear();
    setNewDate();
}
const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__item calendar__last-days">
            <button class="btn__new" onclick="btnAddEvent(${currentYear},${monthNumber-1},${getTotalDays(monthNumber-1)-(i-1)})"><i class='bx bx-calendar-plus'></i></button>
            <p class="calendar__date">${getTotalDays(monthNumber-1)-(i-1)}</p>
            <div class="events__area"></div>
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay && monthNames[currentMonth]===monthNames[month] && currentYear===yearSticky) {
            dates.innerHTML += ` <div class="calendar__item calendar__month-days calendar__today">
            <button class="btn__new" onclick="btnAddEvent(${currentYear},${monthNumber},${i})"><i class='bx bx-calendar-plus'></i></button>
            <p class="calendar__date">${i}</p>
            <div class="events__area"></div>
            </div>`;
        }else{
            dates.innerHTML += ` <div class="calendar__item calendar__month-days">
            <button class="btn__new" onclick="btnAddEvent(${currentYear},${monthNumber},${i})"><i class='bx bx-calendar-plus'></i></button>
            <p class="calendar__date">${i}</p>
            <div class="events__area"></div>
            </div>`;
        }
    }
    printEvent(month)
    btnsNew=document.querySelectorAll(".btn__new")
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);