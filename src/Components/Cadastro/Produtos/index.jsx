import React, { useContext, useRef, useState } from "react";
import { AutenticadoContexto } from "../../../Contexts/authContexts";
import apiLocal from "../../../Api/apiLocal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from '../../../assets/imgs/Logo.png'
import { FiUpload } from "react-icons/fi";

export default function CadProdutos() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    const [imageURL, setImageURL] = useState();
    const imgRef = useRef(null);

    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

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

    async function cadastrarProdutos(e) {
        try {
            e.preventDefault();
            const data = new FormData();
            data.append('file', imagem);
            data.append('nome', nome);
            data.append('preco', preco);
            const response = await apiLocal.post('/CadastrarProdutos', data);
            toast.success(response.data.dados, {
                toastId: 'ToastId'
            });
        } catch (err) {
            toast.error(err)
        };
        setImageURL(null);
        setNome('');
        setPreco('');
    };

    const getImage = () => {
        imgRef.current.click()
    };

    return (
        <>
            <section className="register_prod">
                <div className="register_prod__ctner">
                    <img src={Logo} alt="Logo da Pax Pneus" />
                    <form onSubmit={cadastrarProdutos} className="register_prod__ctner__form">
                        <div className="register_prod__ctner__form__file" onClick={getImage}>
                            {imageURL ? (
                                <img src={(imageURL)} alt="Imagem Selecionada" id="foto-selecionada" />
                            ) : (
                                <label for="file1">
                                    <FiUpload /> Foto do Produto
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
                            placeholder="Nome do Produto"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Preço"
                            required
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                        <Link to="/">Voltar</Link>
                    </form>
                </div>
            </section>
        </>
    );
};