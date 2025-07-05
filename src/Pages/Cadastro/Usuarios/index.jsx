import React, { useState, useContext, useEffect, useRef } from "react";
import { AutenticadoContexto } from '../../../Contexts/authContexts';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiLocal from '../../../Api/apiLocal';
import apiCep from "../../../Api/apiCep";

import { IMaskInput } from 'react-imask';
import { FiUpload } from "react-icons/fi";

export default function CadUsuarios() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    const navigate = useNavigate();

    const [imageURL, setImageURL] = useState();
    const imgRef = useRef(null);

    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState('');
    const [cpfMask, setCpfMask] = useState('');
    const [telefoneMask, setTelefoneMask] = useState('');
    const [cepMask, setCepMask] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [cepTemp, setCepTemp] = useState('');

    useEffect(() => {
        function valoresPossiveis() {
            setRua(cepTemp.logradouro || rua);
            setBairro(cepTemp.bairro || bairro);
            setCidade(cepTemp.localidade || cidade);
            setUf(cepTemp.uf || uf);
        };
        valoresPossiveis();
    }, [buscarCep]);

    function getImagem(e) {
        if (!e.target.files) {
            return;
        };
        const image = e.target.files[0];
        if (image) {
            const url = URL.createObjectURL(image);
            setImageURL(url);
        };
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image);
        };
    };

    async function cadastrarUsuarios(e) {
        try {
            e.preventDefault();
            const cpf = cpfMask.match(/\d/g).join("");
            const telefone = telefoneMask.match(/\d/g).join("");
            const cep = cepMask.match(/\d/g).join("");
            const data = new FormData();
            data.append('file', imagem);
            data.append('nome', nome);
            data.append('cpf', cpf);
            data.append('telefone', telefone);
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
            navigate('/login');
        } catch (err) {
            console.log(err);
        };
    };

    async function buscarCep() {
        const cepNoMask = cepMask.match(/\d/g).join("");
        const resposta = await apiCep(`${cepNoMask}/json`)
        setCepTemp(resposta.data)
    };

    const getImage = () => {
        imgRef.current.click();
    };
    
    return (
        <>
            <section className="register_user">
                <div className="register_user__ctner">
                    <form onSubmit={cadastrarUsuarios} className="register_user__ctner__form">
                        <div className="register_user__ctner__form__file" onClick={getImage}>
                            {imageURL ? (
                                <img src={(imageURL)} alt="Foto selecionada" id="foto-selecionada" />
                            ) : (
                                <label for="file1">
                                    <FiUpload /> Foto de Perfil
                                </label>
                            )}
                            <input
                                type="file"
                                name="file1"
                                id="file1"
                                ref={imgRef}
                                accept="image/jpeg, image/png"
                                onChange={getImagem}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Digite seu Nome"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <div className="register_user__ctner__form__item1">
                            <IMaskInput
                                type="text"
                                mask="000.000.000-00"
                                placeholder="Digite seu CPF"
                                required
                                value={cpfMask}
                                onChange={(e) => setCpfMask(e.target.value)}
                            />
                            <IMaskInput
                                type="text"
                                mask="(00) 00000-0000"
                                placeholder="Digite seu Telefone"
                                required
                                value={telefoneMask}
                                onChange={(e) => setTelefoneMask(e.target.value)}
                            />
                            <IMaskInput
                                type="text"
                                mask="00000-000"
                                placeholder="Digite seu CEP"
                                required
                                value={cepMask}
                                onChange={(e) => setCepMask(e.target.value)}
                                onBlur={buscarCep}
                            />
                        </div>
                        <div className="register_user__ctner__form__item2">
                            <input
                                type="text"
                                placeholder="Rua"
                                required
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                            <input
                                type="number"
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
                        <div className="register_user__ctner__form__item3">
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
                        <div className="register_user__ctner__form__item4">
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