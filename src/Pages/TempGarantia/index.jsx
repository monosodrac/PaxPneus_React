import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../Components/Header'
import Footer from '../../Components/Footer/index'

export default function TempGarantia() {
    return (
        <>
            <Header />
            <div className="container">
                <h3 className="title text-start">
                    Tempo de Garantia
                </h3>
                <p className="text text-start">
                    Garantia de Fábrica – Válida para todos os Pneus!
                    <br />
                    Todos os pneus Continental e marcas do grupo (Barum, General Tire, Semperit e Euzkadi) possuem 5 anos de garantia contra defeitos de fabricação a partir da emissão da nota fiscal.
                    <br />
                    Para mais informações da garantia de fábrica, clique no link e baixe o certificado de garantia – <a className="text" href="https://contipneus.zendesk.com/hc/pt-br/articles/360023122373-Obter-o-Certificado-de-Garantia-para-Pneus-de-Passeio">GARANTIA</a>
                </p>
            </div>
            <Footer />
        </>
    );
};