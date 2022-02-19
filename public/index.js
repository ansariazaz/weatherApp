
window.addEventListener('DOMContentLoaded', (event) => {
let weather = {
    "apiKey":"7eb3a764e5cade25d28e171a917a73f3",
    fetchweather:function (city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`).then((res)=>res.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather:function(data){
      const {name}=data;
      const {icon,description}=data.weather[0];
      const {temp,humidity,temp_max,temp_min,feels_like}= data.main;
      const {speed}= data.wind;
      document.querySelector(".city").innerHTML=`Weather in ${name}`
      document.querySelector(".description").innerHTML=`description: ${description}`
      document.querySelector(".temp").innerHTML=`Temperature: ${temp}°C`
      document.querySelector(".min").innerHTML=`min. temp: ${temp_min}°C`
      document.querySelector(".max").innerHTML=`max. temp: ${temp_max}°C`
      document.querySelector(".feel").innerHTML=`feels like: ${feels_like}°C`
      document.querySelector(".icon").src=`http://openweathermap.org/img/w/${icon}.png`
      document.querySelector(".humidity").innerHTML=`Humidity: ${humidity}%`
      document.querySelector(".wind").innerHTML=`Speed of Wind: ${speed} km/hr`
    },
    search:function(){
      this.fetchweather(document.querySelector(".search-bar").value)  
    }
}

document.querySelector(".btn").addEventListener('click',function(){
   weather.search();
})

document.querySelector(".search-bar").addEventListener('keyup',function(e){
    if(e.key==="Enter"){
        weather.search();
    } 
 })

 });