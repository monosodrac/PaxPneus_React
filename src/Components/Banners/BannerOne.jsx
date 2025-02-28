import React from "react";

import Img from '../../assets/imgs/pax-loc.png'

export default function BannerOne() {
    return (
        <>
            <section className="banner">
                <div className="ctner">
                    <a target="_blank" href="https://paxpneus.com.br/nossas-lojas/?location=7943&location=7943">
                        <img src={Img} alt="" />
                    </a>
                </div>
            </section>
        </>
    );
};