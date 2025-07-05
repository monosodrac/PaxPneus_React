import React from "react";

import Header from "../../Components/Header";
import Manutencao from "../manutencao";
import Footer from "../../Components/Footer";

export default function Carrinho() {
    return (
        <>
            <Header />
            <div className="container">
                <Manutencao />
            </div>
            <Footer />
        </>
    )
};