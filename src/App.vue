<template>
  <div id="app" v-bind:class="changeWeatherBackground()">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <main>
      <div class="search-box">
        <!-- v-model: Creates a two-way binding on a form input element or a component. -->
        <input
          v-model="query"
          v-on:keypress="fetchWeather"
          type="text"
          class="search-bar"
          placeholder="Search..."
        />
      </div>
      <!-- 
        Conditionally rendering elements using v-if. I like this alot
        Omitting the typeof keyword works just the same, as far as I can tell 
      -->
      <div class="weather-wrapper" v-if="typeof weatherData.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{weatherData.name}}, {{weatherData.sys.country}}</div>
          <div class="date">{{ getCurrentDate() }}</div>
        </div>
        <div class="weather-box">
          <div class="temperature">
            <span>{{Math.round(weatherData.main.temp)}}°</span>
            <span class="degree-letter">C</span>
          </div>
          <div class="weather">{{weatherData.weather[0].main}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      API_key: "e14a2d57a1361704e93fd82b3ff3069f",
      URL_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weatherData: {}
    };
  },
  methods: {
    async fetchWeather(e) {
      if (e.key == "Enter") {
        const response = await fetch(
          `${this.URL_base}weather?q=${this.query}&units=metric&APPID=${this.API_key}`
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.setResults(data);
      }
    },
    setResults(results) {
      this.weatherData = results;
    },
    changeWeatherBackground() {
      let className = "";
      if (typeof this.weatherData.main !== "undefined") {
        if (this.weatherData.main.temp > 16) {
          if (this.weatherData.weather[0].main.includes("Haze")) {
            className = "hazy";
          } else if (this.weatherData.weather[0].main.includes("Cloud")) {
            className = "cloudy";
          } else if (this.weatherData.weather[0].main.includes("Clear")) {
            className = "warm";
          }
        } else if (this.weatherData.main.temp < 16) {
          if (this.weatherData.weather[0].main.includes("Cloud")) {
            className = "overcast";
          } else if (this.weatherData.weather[0].main.includes("Snow")) {
            className = "snowy";
          } else if (this.weatherData.weather[0].main.includes("Clear")) {
            className = "cool";
          }
        } else {
          className = "";
        }
        if (this.weatherData.weather[0].main.includes("Rain")) {
          className = "rainy";
        }
        console.log(this.weatherData.weather[0].main);
      }

      return className;
    },
    getCurrentDate() {
      let currentDate = new Date();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let months = [
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
      ];

      let day = days[currentDate.getDay()];
      let date = currentDate.getDate();
      let month = months[currentDate.getMonth()];
      let year = currentDate.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  },
  components: {}
};
</script>

<style>
@import "./App.css";

#app {
  background-image: url("./assets/default.gif");
  background-size: cover;
  background-position: center;
  transition: 0.4s;
}

#app.warm {
  background-image: url("./assets/chaud.jpg");
}

#app.cloudy {
  background-image: url("./assets/nuages.jpg");
}

#app.hazy {
  background-image: url("./assets/haze.jpg");
}

#app.rainy {
  background-image: url("./assets/pluie.jpg");
}

#app.snowy {
  background-image: url("./assets/neige.jpg");
}

#app.overcast {
  background-image: url("./assets/overcast.jpg");
}

#app.cool {
  background-image: url("./assets/cool.jpg");
}

main {
  min-height: 100vh;
  padding: 2.5rem;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.search-box {
  width: 50%;
  margin: 0 auto 9rem auto;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 1.5rem;
  color: #313131;
  font-size: 2rem;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 0.8rem rgba(0, 0, 0, 0.25);

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 1.6rem 0 1.6rem;
  transition: 0.4s ease;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 1.6rem rgba(0, 0, 0, 0.25);
  border-radius: 1.6rem 0 1.6rem 0;
}

.location-box .location {
  color: #fff;
  font-size: 3.2rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temperature {
  display: inline-block;
  padding: 1rem 2.5rem;
  color: #fff;
  font-size: 10.2rem;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1.6rem;
  margin: 3rem 0;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .temperature > * {
  display: inline-block;
}

.weather-box .temperature .degree-letter {
  font-size: 8.5rem;
  font-weight: 700;
}

.weather-box .weather {
  color: #fff;
  font-size: 4.8rem;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>



// Photo by Chandler Cruttenden on Unsplash
// Photo by Luis Graterol on Unsplash
// Photo by Cosmic Timetraveler on Unsplash
// Photo by Dave on Unsplash
// Photo by Barry Simon on Unsplash