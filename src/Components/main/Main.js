import React from "react";

const Main = () => {
    const API_URL  = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=ed55b36e362d8733f7d859247cedeaf2&units=metric`
    return (
        <section>
            <Search />
            <Cities />
        </section>
    )
  };
  
  export default Main;
  