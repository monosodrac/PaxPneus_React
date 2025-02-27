import React, { useState } from "react";

// import Logo from '../../assets/imgs/Logo-Pax-rodape.png'
import Logo from '../../assets/imgs/Logo.png'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function makeLogin(e) {
        e.preventDefault();
        if (!email || !password) {
            alert("Campos em branco");
        } else if (email == 'teste@teste.com' && password == '123456') {
            alert("Login efetuado com Sucesso");
        } else {
            alert("Usuário ou Senha Incorretos");
        };
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <section className="login">
                <div className="login__ctner">
                        <img src={Logo} alt="" />
                    <form onSubmit={makeLogin}>
                        <input
                            type="email"
                            placeholder="Digite seu E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Digite sua Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </section>
        </>
    );
};