let weather={
   "apikey":"906522cb1b58c88f28059f29e1e5fc5d",
   fetchWeather:function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey).then((Response)=>Response.json())
    .then((data)=>this.displayWeather(data));
   },
   displayWeather:function(data){
    let{name}=data;
    let{description,icon}=data.weather[0];
    const{temp,humidity}=data.main;
    const{speed}=data.wind;
    data=document.querySelector(".search-bar").value;
    document.querySelector(".city").innerText="Weather in " +name;
    document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp +"°C";
    document.querySelector(".humidity").innerText="Humidity:" + humidity+ "%";
    document.querySelector(".wind").innerText="wind speed:" +speed+"km/h";
   },
   search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
   },
   onloads:function(){
    this.fetchWeather(document.querySelector(".search-bar").innerText="kochi");
   }

};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

window.onload=weather.onloads();