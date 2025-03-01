import React, { useContext } from "react";
import { AutenticadoContexto } from '../../Contexts/authContexts';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import Logo from '../../assets/imgs/logo.png'

export default function Header() {
    const { verificarToken, autenticado } = useContext(AutenticadoContexto);
    verificarToken();

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
                                {autenticado === true ?
                                <>
                                    <li>
                                        <Link to="/login">
                                            Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cadastro-usuario">
                                            Carrinho
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cadastro-usuario">
                                            Cadastrar-se
                                        </Link>
                                    </li>
                                </>
                                }
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