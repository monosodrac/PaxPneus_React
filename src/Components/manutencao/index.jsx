import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";

import Builder from '../../assets/imgs/pixel-art-12601_256.gif';

export default function Manutencao() {
    return (
        <div className="maintenance">
            <h1>Página em Manutenção</h1>
            <img src={Builder} alt="Pessoa Trabalhando" /> <br />
            
            <a href="/" className="title"><IoArrowBackCircle /></a>
        </div>
    );
};