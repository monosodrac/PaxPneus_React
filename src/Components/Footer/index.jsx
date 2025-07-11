import React from "react";
import { Link } from 'react-router-dom';

import { FaWhatsapp, FaFacebook, FaYoutube, FaBlog, FaRegClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import Logo from '../../assets/imgs/Logo-Pax-rodape.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="ctner">
                    <div className="footer1">
                        <h3>Evite dor de cabeça!</h3>
                        <h4>CONFIANÇA E QUALIDADE É</h4>
                        <img src={Logo} alt="Logo da Pax Pneus" title="Pax Pneus" />
                        <p>
                            São 16 lojas entre São Paulo e Paraná para te atender. Atendimento excepcional, sem pegadinhas, sem
                            dor de cabeça. Antes de comprar pela internet, sempre confira em lugares como o Google as avaliações
                            da empresa.
                        </p>
                    </div>

                    <div className="footer2">
                        <ul>
                            <li>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=5514991920033&location=7943" title="whatsapp">
                                    <FaWhatsapp />
                                    (14) 99192-0033
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=5511975269029&location=7943" title="whatsapp">
                                    <FaWhatsapp />
                                    (11) 97526-9029
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/paxpneus" title="instagram">
                                    <FaInstagram />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/paxpneus" title="facebook">
                                    <FaFacebook />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.youtube.com/channel/UCrvoYFyH52vRTeFjdZAHF7A" title="youtube">
                                    <FaYoutube />
                                    Youtube
                                </a>
                            </li>
                            <li>
                                <Link target="_blank" to="/" title="e-mail">
                                    <MdMailOutline />
                                    sac@paxpneus.com.br
                                </Link>
                            </li>
                            <li>
                                <a target="_blank" href="https://blog.paxpneus.com.br/" title="blog">
                                    <FaBlog />
                                    Confira nosso Blog
                                </a>
                            </li>
                            <li id="horario" title="horário de funcionamento">
                                <FaRegClock />
                                Atendimento de Segunda a Sexta! Das 08:00 às 18:00, e aos sábados
                                das 08:00 às 12:00.
                            </li>
                        </ul>
                        <ul id="politicas">
                            <li>
                                <Link to="/reembolso-devolucoes">
                                    <p>Política de reembolsos e devoluções</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/tempo-garantia">
                                    <p>Tempo de Garantia</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookies">
                                    <p>Política de Cookies (BR)</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p id="direitos">REDE PAX PNEUS 2025</p>
            </footer>
        </>
    );
};