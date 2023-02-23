import React, { useEffect, useState } from "react";
import axios from "axios";

import Cities from '../Cities/Cities';
import Search from "../Search/Search";

import style from "./Main.module.css"

const Main = () => {
/*     const API_URL  = `https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=ed55b36e362d8733f7d859247cedeaf2&units=metric` */

const [cities, setCity] = useState([]);

    async function fetchData() {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=ed55b36e362d8733f7d859247cedeaf2&units=metric`)
          setCity(response.data)
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      },[])

    return (
        <section>
            <Search />
            <Cities city={cities}/>
        </section>
    )
  };
  
  export default Main;
  