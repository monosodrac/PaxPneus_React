import React from "react";

import Img1 from '../../assets/imgs/img1-prefooter.gif'
import Img2 from '../../assets/imgs/img2-prefooter.gif'

export default function BannerThree() {
    return (
        <>
            <section className="banner">
                <div className="ctner">
                    <div className="conheca">
                        <a target="_blank" href="https://www.conti.com.br/?location=7943">
                            <img src={Img1} alt="" />
                        </a>
                        <a target="_blank" href="https://blog.paxpneus.com.br/?location=7943&location=7943&_gl=1*ljaum9*_gcl_au*MTE4OTgzMDg2OC4xNzM3OTgyNTQz*_ga*ODk0NzA2Mjg3LjE3Mzc5ODI1NDM.*_ga_ZNNNCYKRSH*MTczODI0ODQxMC43LjEuMTczODI1MDE2MC42MC4wLjA.">
                            <img src={Img2} alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};