import React from "react";

import ImgHero from '../../assets/imgs/alunotire-filter-high-fidelity-v2-2x-1.png'

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="ctner">
                    <div className="first-msg">
                        <h3>ENCONTRE O SEU <span>PNEU IDEAL!</span></h3>
                        <h4>Verifique a medida na lateral do seu pneu!</h4>
                    </div>
                    <div className="second-msg">
                        <img src={ImgHero} alt="" />
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5514991920033&location=7943">PRECISA DE AJUDA?</a>
                    </div>
                </div>
            </section>
        </>
    );
};