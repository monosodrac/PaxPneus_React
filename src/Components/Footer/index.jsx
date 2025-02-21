import React from "react";
import { FaWhatsapp, FaFacebook, FaYoutube, FaBlog, FaRegClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";


import Logo from '../../assets/imgs/Logo-Pax-rodape.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div class="ctner">
                    <div class="footer1">
                        <h3>Evite dor de cabeça!</h3>
                        <h4>CONFIANÇA E QUALIDADE É</h4>
                        <img src={Logo} alt="" />
                            <p>
                                São 16 lojas entre São Paulo e Paraná para te atender. Atendimento excepcional, sem pegadinhas, sem
                                dor de cabeça. Antes de comprar pela internet, sempre confira em lugares como o Google as avaliações
                                da empresa.
                            </p>
                    </div>

                    <div class="footer2">
                        <ul>
                            <li>
                                <a target="_blank" href="">
                                    <FaWhatsapp />
                                    (14) 99192-0033
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <FaWhatsapp />
                                    (11) 97526-9029
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <FaInstagram />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <FaFacebook />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <FaYoutube />
                                    Youtube
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <MdMailOutline />
                                    sac@paxpneus.com.br
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <FaBlog />
                                    Confira nosso Blog
                                </a>
                            </li>
                            <li id="horario">
                                <FaRegClock />
                                Atendimento de Segunda a Sexta! Das 08:00 às 18:00, e aos sábados
                                das 08:00 às 12:00.
                            </li>
                        </ul>
                        <ul id="politicas">
                            <li>
                                <a target="_blank" href="">
                                    <p>Política de reembolsos e devoluções</p>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <p>Tempo de Garantia</p>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    <p>Política de Cookies (BR)</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p id="direitos">REDE PAX PNEUS 2025</p>
            </footer>
        </>
    );
};