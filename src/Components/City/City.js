import React, { useEffect, useState} from "react";


const City = (newCity) => {
    const { city } = newCity;
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCities((prev)=>[...prev, city])
    }, [city])


    return (
        <div>
        <h1>Ciao</h1>
{/*               <h2>{cities !== undefined && cities[0].name}</h2>  */}
{/*             <h3>{newCity.city.main.temp}</h3>
            <p>Max: {newCity.city.max} Min:{newCity.city.min}</p> */}
        </div> 
    )
  };
  
  export default City;
  