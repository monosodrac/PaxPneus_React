import React from "react";

import Img1 from '../../assets/imgs/Icone1.png'
import Img2 from '../../assets/imgs/Icone2.png'
import Img3 from '../../assets/imgs/Icone3.png'
import Img4 from '../../assets/imgs/Icone4.png'

export default function Ofertas() {
    return (
        <>
            <section className="ofertas">
                <div className="ctner">
                    <div className="title">
                        <h2 className="title">Comece o Ano com Segurança: Renove Seus Pneus em 10x Sem Juros!</h2>
                        <p className="text">Dê a Largada em 2025 com Pneus Novinhos e Parcelamento Sem Juros!</p>
                    </div>
                    <div className="ofertas__tabs">
                        <div className="ofertas__tabs__item">
                            <img src={Img1} alt="Oferta de pneu aro 13" />
                                <p className="text">ARO 13 A PARTIR DE</p>
                                <h2 className="title">R$229</h2>
                                <button>Orçamento Whatsapp</button>
                        </div>
                        <div className="ofertas__tabs__item">
                            <img src={Img2} alt="Oferta de pneu aro 13" />
                                <p className="text">ARO 13 A PARTIR DE</p>
                                <h2 className="title">R$229</h2>
                                <button>Orçamento Whatsapp</button>
                        </div>
                        <div className="ofertas__tabs__item">
                            <img src={Img3} alt="Oferta de pneu aro 13" />
                                <p className="text">ARO 13 A PARTIR DE</p>
                                <h2 className="title">R$229</h2>
                                <button>Orçamento Whatsapp</button>
                        </div>
                        <div className="ofertas__tabs__item">
                            <img src={Img4} alt="Oferta de pneu aro 13" />
                                <p className="text">ARO 13 A PARTIR DE</p>
                                <h2 className="title">R$229</h2>
                                <button>Orçamento Whatsapp</button>
                        </div>
                        <div className="ofertas__tabs__item">
                            <img src={Img4} alt="Oferta de pneu aro 13" />
                                <p className="text">ARO 13 A PARTIR DE</p>
                                <h2 className="title">R$229</h2>
                                <button>Orçamento Whatsapp</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};