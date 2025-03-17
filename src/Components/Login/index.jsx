import React, { useState, useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AutenticadoContexto } from '../../Contexts/authContexts';

import Logo from '../../assets/imgs/Logo.png'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { verificarToken, loginEntrada } = useContext(AutenticadoContexto);
    verificarToken();

    const navigator = useNavigate();

    async function makeLogin(e) {
        e.preventDefault();
        if (!email || !password) {
            alert("Campos em branco");
        }
        try {
            await loginEntrada(email, password);
            navigator("/");
        } catch (err) {
            toast.error("Usuario ou Senha Incorretos", {
                toastId: 'ToastId'
            });
            navigator("/login");
        };
    };

    return (
        <>
            <section className="login">
                <div className="login__ctner">
                    <img src={Logo} alt="Logo da Pax Pneus" />
                    <form onSubmit={makeLogin}>
                        <input
                            type="email"
                            placeholder="Digite seu E-mail"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Digite sua Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                        <Link id="btn-cadastrar" to="/cadastro-usuario">Cadastrar-se</Link>
                        <Link to="/">Voltar</Link>
                    </form>
                </div>
            </section>
        </>
    );
};