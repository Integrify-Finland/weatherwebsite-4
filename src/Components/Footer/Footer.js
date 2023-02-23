import React from "react";

import footerStyle from './Footer.module.css';

const Footer = () => {
    return (
        <p className={footerStyle.footer}>Created by <a href="https://github.com/AdyValsa">Adriano Valsangiacomo,</a> <a href="https://github.com/Parvizkh88">Parviz Khodavandegar</a> and <a href="https://github.com/yasmingsdm">Yasmin Dal Medico</a>
        </p>
    )
}

export default Footer;