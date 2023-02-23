import React from "react";

import Subscribe from "./Subscribe";
import headerStyle from './Header.module.css'


const Header = () => {
    return (<header>
        <Subscribe />
        <section className={headerStyle.banner}>
            <img className={headerStyle.img} src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg" alt="weather" />
            <h1 className={headerStyle.title}>Weather Website</h1>
        </section>

    </header>)

}

export default Header;