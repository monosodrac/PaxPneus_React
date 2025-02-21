import React from "react";
import { IoSearch } from "react-icons/io5";

import Logo from '../../assets/imgs/logo.png'

export default function () {
    return (
        <>
            <header>
                <div className="ctner">
                    <div className="header">
                        <section className="first">
                            <h2>
                                <a href="#">
                                    Nossas Lojas
                                </a>
                            </h2>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5514991920033&location=7943">
                                        (14) 99192-0033
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511975269029">
                                        (14) 97526-9029
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section className="second">
                            <h1>
                                <a href="#">
                                    <img src={Logo} alt="Logo da Pax Pneus" />
                                </a>
                            </h1>
                            <input type="text" placeholder="Pesquisar..." />
                                <button className="btn-search">
                                    <IoSearch />
                                </button>
                        </section>
                    </div>
                </div>
            </header>
        </>
    );
};