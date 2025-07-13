

async function weather(city){
    const apiKey = "3feefd404d9597c69b0bb7259bdd14a1"; // Replace with your OpenWeatherMap API key
    const cityInput = city;

    if (!cityInput) {
      alert("Please enter a city name");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      document.querySelector(".name").textContent = data.name;
      document.querySelector(".description").textContent = data.weather[0].description;
      document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
      document.querySelector(".icon img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".icon img").alt = data.weather[0].main;



    } catch (error) {
      alert("Error fetching weather: " + error.message);
    }

}

  async function getWeather() {
    let city = document.querySelector(".cityInput").value;
    await weather(city)
  }



window.onload   =async function (){
await weather("Larkana")

}