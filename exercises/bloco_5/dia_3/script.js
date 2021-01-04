function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheCalendar(){
    let calendarDaysList=document.querySelector('#days');

    for (let index=0; index<dezDaysList.length;index++){
        let calDays=dezDaysList[index];
        let calDaysListItem=document.createElement('li');
        
        if(calDays==24 |calDays==31){
            calDaysListItem.className='day holiday'
            calDaysListItem.innerHTML= calDays;
            calendarDaysList.appendChild(calDaysListItem);
        }else if(calDays==25){
            calDaysListItem.className='day holiday friday'
            calDaysListItem.innerHTML= calDays;
            calendarDaysList.appendChild(calDaysListItem);
        }else if(calDays==4 |calDays==11|calDays==18|calDays==31){
            calDaysListItem.className='day friday'
            calDaysListItem.innerHTML= calDays;
            calendarDaysList.appendChild(calDaysListItem);
        }else{
            calDaysListItem.className='day';
            calDaysListItem.innerHTML=calDays;
            calendarDaysList.appendChild(calDaysListItem);
        }

    }
}

createDaysOfTheCalendar();

function createHolidayButton(buttonName){
    let buttonContainer=document.querySelector('.buttons-container');
    let holidayButton=document.createElement('button');

    holidayButton.innerHTML=buttonName;
    holidayButton.id='btn-holiday';

    buttonContainer.appendChild(holidayButton);

}
createHolidayButton('Feriado');

function displayHolidays(){
    let getHolButton=document.querySelector('#btn-holiday');
    let getHolidays=document.querySelectorAll('.holiday');
    let setNewColor='red';
    let backgroundColor='rgb(238,238,238)';
    getHolButton.addEventListener('click',function(){
        for(let index=0;index<getHolidays.length;index++){
            if(getHolidays[index].style.backgroundColor==setNewColor){
                getHolidays[index].style.backgroundColor=backgroundColor;
            }else{
                getHolidays[index].style.backgroundColor=setNewColor;
            }
        }
    });
   
}

displayHolidays();

function createFridayButton(buttonName){
    let buttonContainer=document.querySelector('.buttons-container');
    let fridayButton=document.createElement('button');

    fridayButton.innerHTML=buttonName;
    fridayButton.id='btn-friday';

    buttonContainer.appendChild(fridayButton);

}

createFridayButton('Sexta-Feira');

function displayFridays(fridaysList){
    let getFriButton=document.querySelector('#btn-friday');
    let getFridays=document.querySelectorAll('.friday');
    let newFridayText='SEXTA!';
    getFriButton.addEventListener('click',function(){
        for(let index=0;index<getFridays.length;index++){
            if(getFridays[index].innerHTML!=newFridayText){
                getFridays[index].innerHTML=newFridayText;
            }else{
                getFridays[index].innerHTML=fridaysList[index];
            }
        }
    });
   

}
let dezFridays=[4,11,18,25];
displayFridays(dezFridays);

function daysMouseOver(){
    let days=document.querySelector('#days');

    days.addEventListener('mouseover',function(){
        event.target.style.fontSize='30px';
        event.target.style.fontWeight='600';
    })
}

function daysMouseOut(){
    let days=document.querySelector('#days');

    days.addEventListener('mouseout',function(){
        event.target.style.fontSize='20px';
        event.target.style.fontWeight='200';
    })
}

daysMouseOut();
daysMouseOver();