//============dates displayed with Day JS=========
var today = dayjs();
$(".todaysdate").text(today.format("[Today is] MMM D, YYYY"));
// console.log(today)

var dayTwo = dayjs().add(1, "days");
// console.log(dayTwo)
$("#date0").text(dayTwo.format("MMM D, YYYY"));

var dayThree = dayjs().add(2, "days");
// console.log(dayTwo)
$("#date1").text(dayThree.format("MMM D, YYYY"));

var dayFour = dayjs().add(3, "days");
// console.log(dayTwo)
$("#date2").text(dayFour.format("MMM D, YYYY"));

var dayFive = dayjs().add(4, "days");
// console.log(dayTwo)
$("#date3").text(dayFive.format("MMM D, YYYY"));

var daySix = dayjs().add(5, "days");
// console.log(dayTwo)
$("#date4").text(daySix.format("MMM D, YYYY"));

// ===============================================
var city='';
var url='';
var apiKey='';
var cueryUrl ='';
var citiesDiv = document.getElementById("searched_cities_container");
var cities = []; //start with empty array

init();
listClicker();
searchClicker();




//API calls

var apiKey = "bbaae16b1501b9e43700f50808acd154";

var searchButton = document.querySelector("#searchbtn");
var searchInput = document.querySelector("#search_bar");
  
  function getApi() {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=bbaae16b1501b9e43700f50808acd154";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  getApi()



  function getCity() {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=bbaae16b1501b9e43700f50808acd154";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  getCity()





