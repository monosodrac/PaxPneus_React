import React from "react";

import Img from '../../assets/imgs/fale-conosco.png'

export default function BannerTwo() {
    return (
        <>
            <section className="banner">
                <div className="ctner">
                    <a
                        target="_blank" href="https://api.whatsapp.com/send?phone=554388550469&text=Ol%C3%A1,%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o&location=7943">
                        <img src={Img} alt="" />
                    </a>
                </div>
            </section>
        </>
    );
};