const apiKey="";
const apiUrl="";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";

    }
    else{

    var data =await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+" °c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if (data.weather[0].main=="Rain") {
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0]=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0]=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value);})
searchBtn.addEventListener("submit", ()=>{checkWeather(searchBox.value);})