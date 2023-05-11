# weather-dashboard

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Description

```
A simple web-app that allows you to search for a city and get the current weather and 5 day forecast. You can experience the deployed project below.
```

## Installation

The link to deployed application is: https://esztergb.github.io/weather-dashboard/
The link to GitHub Repo: https://github.com/Esztergb/weather-dashboard.git

![ScreenShot](assets/images/Screenshot.png)

## Usage

I used the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. 
The base URL: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. 
My API key: bbaae16b1501b9e43700f50808acd154


## Credits

Thank you for tips and sugestions from Bootcamp instructors and classmates. 
I have used https://www.w3schools.com/ and https://www.stackoverflow.com to research information.
Worked with tutor Drew Sanchez on simplifying some of the codes.
Reviewed examples of the project online.

## License

N/A - Bootcamp Challange 6