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
//API calls

var locations = [];
var apiKey = "bbaae16b1501b9e43700f50808acd154";

function currentWeather() {
  
  var fiveDayUrl =
    "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=bbaae16b1501b9e43700f50808acd154";

  fetch(fiveDayUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
       })
}
currentWeather()