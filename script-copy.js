// Must-have features
//
//     In the home page the user can enter the city of his/her choice (think of the right HTML elements here)
//     On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
//     The application must be responsive and mobile friendly
//
//
// Nice-to-have features (in no specific order)
//
//     Display a line graph of temperature over time using a library such as Chart.js
//     Remember the user choice on subsequent visits
//     Allow the user to compare the weather in two cities
//     Use the API of https://unsplash.com/ to show a photo of the city they entered in the form.





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

// Show user his city selection
function showInput(){
    document.getElementById('display').innerHTML= document.getElementById("user-input").value;
    return false;
}

