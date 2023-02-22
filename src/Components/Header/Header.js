import React from "react";

import Subscribe from "./Subscribe";
import './Header.module.css'


const Header = ()=>{
    return (<header>
        <Subscribe />
        <section className="header__banner">
            <img className="banner__img" src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg" alt="weather"/>
            <h1 className="banner__title">Weather Website</h1>
        </section>
       
    </header>)
    
}

export default Header;