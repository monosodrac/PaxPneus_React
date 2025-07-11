import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AutenticadoContexto } from '../../Contexts/authContexts';

import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

import Logo from '../../assets/imgs/logo.png'

export default function Header() {
    const { verificarToken, autenticado } = useContext(AutenticadoContexto);
    verificarToken();

    const navigator = useNavigate();

    function sair() {
        localStorage.clear();
        navigator("/login");
    };

    return (
        <>
            <header>
                <div className="ctner">
                    <div className="header">
                        <section className="first">
                            <h2>
                                <Link to="/" id="lojas">
                                    Nossas Lojas
                                </Link>
                            </h2>
                            <ul>
                                {autenticado === true ?
                                    <>
                                        <li>
                                            <Link to="/perfil">
                                                Perfil
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/carrinho">
                                                Carrinho
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={sair}>Sair</button>
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
                                <a href="/">
                                    <img title="Pax Pneus" src={Logo} alt="Logo da Pax Pneus" />
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