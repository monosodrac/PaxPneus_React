import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';

import Logo from '../../../assets/imgs/Logo-Pax-rodape.png'

export default function CadUsuarios() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault();
        navigate("/Login");
    };

    return (
        <>
            <section className="register">
                <div className="register__ctner">
                    <form onSubmit={registerUser} className="register__ctner__form">
                        <img src={Logo} alt="" />
                        <input
                            type="text"
                            placeholder="Digite seu Nome"
                            value={nome}
                            required
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <div className="register__ctner__form__item1">
                            <input
                                type="text"
                                placeholder="Digite seu CPF"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Digite seu CEP"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                        <div className="register__ctner__form__item2">
                            <input
                                type="text"
                                placeholder="Rua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Nº"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Complemento"
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                        </div>
                        <div className="register__ctner__form__item3">
                            <input
                                type="text"
                                placeholder="Bairro"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="UF (Estado)"
                                value={uf}
                                onChange={(e) => setUf(e.target.value)}
                            />
                        </div>
                        <div className="register__ctner__form__item1">
                            <input
                                type="email"
                                placeholder="Digite seu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Digite sua Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Enviar</button>
                        <Link to="/">Voltar</Link>
                    </form>
                </div>
            </section>
        </>
    );
};