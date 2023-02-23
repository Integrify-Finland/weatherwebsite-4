import React, { useEffect, useState } from "react";

import Cities from '../Cities/Cities';
import Search from "../Search/Search";

const Main = () => {

const [data, setData] = useState([]);
const [error, setError] = useState();
const [loading, setLoading] = useState(true);

useEffect(() => {
    const API_URL  = `https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=ed55b36e362d8733f7d859247cedeaf2&units=metric`
    setLoading(true);
    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                setError(true);
                setLoading(false);
                throw Error('Something went wrong');
            }
            return response.json();
        })
        .then((response) => {
            setData(response);
            setLoading(false);
            console.log(response)
        })
        .catch((error) => {
            setError(true);
            setLoading(false);
        });
}, []);

    return (
        <section>
            <h1>Hello</h1>
            <Search />
            <Cities city={data}/>
        </section>
    )
  };
  
  export default Main;
  