function fetchWeather(event) {
  if (event.code === "Enter") {
    console.log(event.target.value);
    // trying to get the data of the weather
    const city = event.target.value;
    
    const url =
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6e7849af5ea991b87272b3a72ea28802`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        //trying to get the name that i'm typing on the screen

        const newLocation = document.getElementById("search-bar").value;

        // trying to get the temperature
        document.getElementById("temp").innerText = data.main.temp + " ºC";
      });
  }
}

document
  .getElementById("search-bar")
  .addEventListener("keypress", fetchWeather);







function putDate() {
  var dayWeek = new Array(
    "Sunday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday"
  );
  var months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var f = new Date();
  var text = document.write(
    dayWeek[f.getDay()] +
      " " +
      f.getDate() +
      " " +
      months[f.getMonth()] +
      " " +
      f.getFullYear()
  );
  document.getElementById("date").innerHTML = text;
}
