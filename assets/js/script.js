//============dates displayed with Day JS=========
var today = dayjs();
$(".todaysdate").text(today.format("MMM D, YYYY"));
// console.log(today)

// var dayTwo = dayjs().add(1, "days");
// // console.log(dayTwo)
// $("#date0").text(dayTwo.format("MMM D, YYYY"));

// var dayThree = dayjs().add(2, "days");
// // console.log(dayTwo)
// $("#date1").text(dayThree.format("MMM D, YYYY"));

// var dayFour = dayjs().add(3, "days");
// // console.log(dayTwo)
// $("#date2").text(dayFour.format("MMM D, YYYY"));

// var dayFive = dayjs().add(4, "days");
// // console.log(dayTwo)
// $("#date3").text(dayFive.format("MMM D, YYYY"));

// var daySix = dayjs().add(5, "days");
// // console.log(dayTwo)
// $("#date4").text(daySix.format("MMM D, YYYY"));

//get dates code revised to one code with the help from tutor

for (let i = 0; i < 5; i++) {
  var day = dayjs().add(i+1, "days");
  $(`#date${i}`).text(day.format("MMM D, YYYY"));
}

// ===============================================
var city = "";
var url = "";
var apiKey = "";
var cueryUrl = "";
var citiesDiv = document.getElementById("searched_cities_container");
var cities = []; //start with empty array

init();
listClicker();
searchClicker();

//function to pull saved cities from local storage and add them to empty arrey

function init() {
  var saved_cities = JSON.parse(localStorage.getItem("cities"));

  if (saved_cities !== null) {
    cities = saved_cities;
  }
  renderButtons(); 
}

//set local storage
function storeCities() {
  localStorage.setItem("cities", JSON.stringify(cities));
}
//function to show the past searched cities and append them to citiesDiv
function renderButtons() {
  citiesDiv.innerHTML = "";
  if (cities == null) {
    return;
  }
  var unique_cities = [...new Set(cities)];
  for (var i = 0; i < unique_cities.length; i++) {
    var cityName = unique_cities[i];

    var buttonEL = document.createElement("button");
    buttonEL.textContent = cityName;
    buttonEL.setAttribute("class", "listbtn");

    citiesDiv.appendChild(buttonEL);
    listClicker();
  }
}

//on click function for search history buttons
function listClicker() {
  $(".listbtn").on("click", function (event) {
    console.log("anybody home");
    event.preventDefault();
    console.log("hello");
    city = $(this).text().trim();
    APIcalls();
  });
}

//on click function for main search button

function searchClicker() {
  $("#searchbtn").on("click", function (event) {
    event.preventDefault();
    city = $(this).prev().val().trim();

    //push the user enterd citi into the cities array
    cities.push(city);
    //city array.lengh never exceed 8
    if (cities.length > 8) {
      cities.shift();
    }
    if (city == "") {
      return;
    }
    APIcalls();
    storeCities();
    renderButtons();
  });
}

//API calls  var apiKey = "bbaae16b1501b9e43700f50808acd154";

function APIcalls() {
  url = "https://api.openweathermap.org/data/2.5/forecast?q=";
  currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
  APIkey = "&appid=bbaae16b1501b9e43700f50808acd154";
  queryurl = url + city + APIkey;
  current_weather_url = currenturl + city + APIkey;
  $("#name_of_city").text("Today's Weather in " + city);
  fetch(queryurl)
    .then(function (response) {
     return response.json();
      })
    .then(function (response) {
    var day_number = 0;

    //loop through the 40 weather data sets
    for (var i = 0; i < response.list.length; i++) {
      //split function to isolate the time from the time/data of the weather data, and only select weather reports for 3pm
      if (response.list[i].dt_txt.split(" ")[1] == "15:00:00") {
        //if time of report is 3pm, populate text areas accordingly
        var day = response.list[i].dt_txt.split("-")[2].split(" ")[0];
        var month = response.list[i].dt_txt.split("-")[1];
        var year = response.list[i].dt_txt.split("-")[0];
        $("#" + day_number + "date").text(month + "/" + day + "/" + year);
        var temp = Math.round(
          ((response.list[i].main.temp - 273.15) * 9) / 5 + 32
        );
        $("#" + day_number + "five_day_temp").text(
          "Temp: " + temp + String.fromCharCode(176) + "F" //(String.fromCharCode(176)) - returns degree symbol
        );
        $("#" + day_number + "five_day_humidity").text(
          "Humidity: " + response.list[i].main.humidity
        );
        $("#" + day_number + "five_day_icon").attr(
          "src",
          "http://openweathermap.org/img/w/" +
            response.list[i].weather[0].icon +
            ".png"
        );
        console.log(response.list[i].dt_txt.split("-"));
        console.log(day_number);
        console.log(response.list[i].main.temp);
        day_number++;
      }
    }
  });

  
  fetch(current_weather_url)
     .then(function (response) {
       return response.json();
     })
    .then(function (current_data) {
    console.log(current_data);
    var temp = Math.round(((current_data.main.temp - 273.15) * 9) / 5 + 32);
    console.log("The temperature in " + city + " is: " + temp);
    $("#today_temp").text(
      "Temperature: " + temp + String.fromCharCode(176) + "F"
    );
    $("#today_humidity").text("Humidity: " + current_data.main.humidity);
    $("#today_wind_speed").text("Wind Speed: " + current_data.wind.speed);
    $("#today_icon_div").attr({
      src:
        "http://openweathermap.org/img/w/" +
        current_data.weather[0].icon +
        ".png",
      height: "100px",
      width: "100px",
    });
  });
}

