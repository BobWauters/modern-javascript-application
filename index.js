import {showInput} from "./showInput.js";



let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let firstDay = document.querySelector('#day-1-desc');
let secondDay=document.querySelector(' #day-2-desc');
let thirdDay=document.querySelector('  #day-3-desc');
let fourthDay=document.querySelector(' #day-4-desc');
let fifthDay=document.querySelector('  #day-5-desc');


//API TRY 2
button.addEventListener('click', function (){
    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value +'&units=metric&appid=4ce0604fe97650f47963ef28c9f566d5')
        .then (response => response.json())
        //.then (data => console.log(data))

        //TODO: recheck why fahrenheit to celcius is -273.15
        //.then (data => console.log(data))
       .then(data => {

                //try gazillion:
               const getAllData = function getDataFromDays(index){
                   let descValue1 = data.list[index].weather[0].main;
                   let tempValue1 = (Math.round(data.list[index].main.temp) + '&degC');
                   return descValue1 +""+ tempValue1;
                }

               firstDay.innerHTML = getAllData(0);
               secondDay.innerHTML = getAllData(8);
               thirdDay.innerHTML = getAllData(16);
               fourthDay.innerHTML = getAllData(24);
               fifthDay.innerHTML = getAllData(32);

        })

        .catch(err => {console.log(err)});

})
// error :/ but it initializes it and shows very briefly on screen tho / showInput()

