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


// function currentWeather() {
//   var apiKey = 'bdb6607634ae6bb646c215e69d185e01';
//   var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}"

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement("tr");
//         var tableData = document.createElement("td");
//         var link = document.createElement("a");

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
// //       }
//     });
// }
