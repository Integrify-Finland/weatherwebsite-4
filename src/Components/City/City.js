import React, { useEffect, useState } from "react";


const City = ({ name, main }) => {

    // console.log(main)

    return (
        <div>

            <h2>{name}</h2>
            <h3>{main?.temp}</h3>
            <p>Max: {main?.temp_max}  Min:{main?.temp_min}</p>

        </div>
    )
};

export default City;
