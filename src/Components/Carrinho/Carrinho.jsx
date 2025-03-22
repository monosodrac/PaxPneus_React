import React from "react";

import Header from "../Header";
import Manutencao from "../manutencao";
import Footer from "../Footer";

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