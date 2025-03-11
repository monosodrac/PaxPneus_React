import React, { useState, useContext } from "react";
import { AutenticadoContexto } from '../../../Contexts/authContexts';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal';

import Logo from '../../../assets/imgs/Logo-Pax-rodape.png'

export default function CadUsuarios() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    const [imagem, setImagem] = useState(null);
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

    function getImagem(e) {
        if(!e.target.files) {
            return;
        };
        const image = e.target.files[0];
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image);
        };
    };

    async function cadastrarUsuarios(e) {
        try {
            e.preventDefault();
            const data = new FormData();
            data.append('file', imagem);
            data.append('nome', nome);
            data.append('cpf', cpf);
            data.append('cep', cep);
            data.append('rua', rua);
            data.append('numero', numero);
            data.append('complemento', complemento);
            data.append('bairro', bairro);
            data.append('cidade', cidade);
            data.append('uf', uf);
            data.append('email', email);
            data.append('password', password);
            const resposta = await apiLocal.post('/CadastrarUsuarios', data)
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            })
            navigate('/');
        } catch (err) {
            console.log(err)
        }
        setImagem(null)
        setNome('')
        setCep('')
        setRua('')
        setNumero('')
        setBairro('')
        setCidade('')
        setUf('')
        setEmail('')
    };

    return (
        <>
            <section className="register">
                <div className="register__ctner">
                    <form onSubmit={cadastrarUsuarios} className="register__ctner__form">
                        <img src={Logo} alt="" />
                        <input
                            type="file"
                            accept="image/jpeg, image/png"
                            onChange={getImagem}
                        />
                        <input
                            type="text"
                            placeholder="Digite seu Nome"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <div className="register__ctner__form__item1">
                            <input
                                type="text"
                                placeholder="Digite seu CPF"
                                required
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Digite seu CEP"
                                required
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                        <div className="register__ctner__form__item2">
                            <input
                                type="text"
                                placeholder="Rua"
                                required
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Nº"
                                required
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
                                required
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="UF (Estado)"
                                required
                                value={uf}
                                onChange={(e) => setUf(e.target.value)}
                            />
                        </div>
                        <div className="register__ctner__form__item1">
                            <input
                                type="email"
                                placeholder="Digite seu Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Digite sua Senha"
                                required
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