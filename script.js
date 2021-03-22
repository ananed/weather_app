function fetchWeather(event) {
  if (event.code === "Enter") {

    const city = event.target.value;
    
    const url =
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6e7849af5ea991b87272b3a72ea28802`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);

        document.getElementById("temp").innerText = data.main.temp + "ºC";
        document.getElementById("location").innerText = city;
        let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let  days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let d = new Date();
        console.log(new Date().getDay);
        let monthName = d.getDay() + " " + days[d.getDay()] +  " " + "of" + " " + months[d.getMonth()] + " " + d.getFullYear();
        document.getElementById("date").innerHTML = monthName;
        document.getElementById("weather").innerText = data.weather[0].description;
        console.log(data.weather[0].description)
  });
}


}

document.getElementById("search-bar").addEventListener("keypress", fetchWeather);

